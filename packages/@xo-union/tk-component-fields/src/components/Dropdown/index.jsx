import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';
import { labelize, fieldId } from '../../utilities';
import { isColumn } from '@xo-union/tk-component-grid';

@isColumn({ className: FieldsCss['field-col'] })
export default class Dropdown extends Component {
  static childContextTypes = {
    selectedValue: PropTypes.string,
    updateDropdownValue: PropTypes.func
  };

  static propTypes = {
    /**
     * Name used for input
     */
    name: PropTypes.string.isRequired,
    /**
     * Value to set on input element.
     * This is also provided to child elements as context.selectedValue
     */
    value: PropTypes.string,
    /**
     * The input's label string, default value is assumed from 'name'.
     */
    label: PropTypes.string,
    /**
     * Override the id which is derived from the name
     */
    id: PropTypes.string,
    /**
     * Should more than likely be DropdownItem components
     */
    children: PropTypes.node,
    /**
     * Callback for when user selects a value
     */
    onSelect: PropTypes.func
  };

  state = {
    value: this.props.value || ''
  };

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
      // Disabling eslint rule here, this pattern is really useful to remove keys from objects
      // eslint-disable-next-line no-unused-vars
      value,
      onSelect,
      ...props,
    } = this.props;

    return (
      <div className={FieldsCss.container}>
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

