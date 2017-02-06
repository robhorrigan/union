import React, { Component,  PropTypes as T } from 'react';
import FieldsCss from '@xo-union/fields/css';
import { labelize, fieldId } from 'fields/utilities';

export default class Dropdown extends Component {
  static childContextTypes = {
    selectedValue: T.any,
    updateDropdownValue: T.func
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
      updateDropdownValue: (value) => {
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
      id = fieldId(name),
      children,
      // Remove from props
      value,
      onSelect,
      ...props
    } = this.props;

    return (
      <div className={FieldsCss.fieldContainer}>
        <input
          className={FieldsCss.dropdownField}
          id={id}
          name={name}
          value={this.state.value}
          readOnly
          placeholder=" "
          type="text"
          {...props}
        />

        <label className={FieldsCss.fieldLabel} htmlFor={id}>{ label }</label>
        <span className={FieldsCss.dropdownCaret} />

        <div className={FieldsCss.container}>
          <ul className={FieldsCss.dropdownList}>
            {children}
          </ul>
        </div>
      </div>
    );
  }
}

