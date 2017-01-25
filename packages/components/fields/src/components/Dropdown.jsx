import React, { Component,  PropTypes as T } from 'react';
import styles from '@union/field-styles';
import humanize from 'humanize-string';

export default class Dropdown extends Component {
  static childContextTypes = {
    selectedValue: T.any
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
     * The input's label string
     */
    label: T.string,
    /**
     * Should more than likely be DropdownItem components
     */
    children: T.arrayOf(T.node)
  };

  getDefaultProps() {
    const { name } = this.props;

    return { label: humamize(name) };
  }

  getChildContext() {
    return { selectedValue: this.props.value };
  }

  render() {
    const {
      name,
      value,
      label,
      children,
      ...props
    } = this.props;

    const id = name + Date.now();

    return (
      <div className={styles.fieldContainer}>
        <input className={styles.dropdownField} id={id} name={name} value={value} readOnly placeholder=" " {...props} />
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

