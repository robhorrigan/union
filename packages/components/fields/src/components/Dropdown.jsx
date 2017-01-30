import React, { Component,  PropTypes as T } from 'react';
import styles from '@union/fields-css';
import labelize from 'utilities/labelize';

export default class Dropdown extends Component {
  static childContextTypes = {
    selectedValue: T.any,
    updateDropdown: T.func
  };

  static propTypes = {
    /**
     * Name used for input
     */
    name: T.string.isRequired,
    /**
     * Value to set on input element.
     * This is also provided to child elements as context.selectedValue
     */
    value: T.string,
    /**
     * The input's label string, default value is assumed from 'name'.
     */
    label: T.string,
    /**
     * Should more than likely be DropdownItem components
     */
    children: T.node
  };

  state = {
    value: this.props.value || ''
  }

  getChildContext() {
    return {
      selectedValue: this.state.value,
      updateDropdown: (value) => {
        const {
          onSelect = () => {}
        } = this.props;

        this.setState({ value });
        onSelect(value);
      }
    };
  }

  render() {
    const {
      name,
      label = labelize(name),
      children,
      // Remove from props
      value,
      onSelect,
      ...props
    } = this.props;

    const id = name + Date.now();

    return (
      <div className={styles.fieldContainer}>
        <input
          className={styles.dropdownField}
          id={id}
          name={name}
          value={this.state.value}
          readOnly
          placeholder=" "
          type="text"
          {...props}
        />

        <label className={styles.fieldLabel} htmlFor={id}>{ label }</label>
        <span className={styles.dropdownCaret} />

        <div className={styles.container}>
          <ul className={styles.dropdownList}>
            {children}
          </ul>
        </div>
      </div>
    );
  }
}

