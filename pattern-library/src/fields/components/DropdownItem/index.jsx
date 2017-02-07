import React, { Component, PropTypes } from 'react';
import FieldsCss from '@xo-union/fields/css';

export default class DropdownItem extends Component {
  static propTypes = {
    /**
     * Item label
     */
    label: PropTypes.string.isRequired,
    /**
     * Value to set on top level Dropdown component. (Defaults to the value of label)
     */
    value: PropTypes.any
  };

  static contextTypes = {
    selectedValue: PropTypes.any,
    updateDropdownValue: PropTypes.func
  };

  get value() {
    return this.props.value || this.props.label;
  }

  get onMouseDownHandler() {
    const {
      updateDropdownValue = () => {}
    } = this.context;

    return () => updateDropdownValue(this.value);
  }

  get isSelected() {
    if (this.props.isSelected) {
      return this.props.isSelected;
    }

    return this.context.selectedValue === this.value;
  }

  render() {
    let className = FieldsCss.dropdownItem;
    const { label } = this.props;

    if (this.isSelected) {
      className = FieldsCss.dropdownItemIsSelected;
    }

    return (
      <li className={className} onMouseDown={this.onMouseDownHandler}>
        {label}
        <span className={FieldsCss.dropdownItemCheck} />
      </li>
    );
  }
}
