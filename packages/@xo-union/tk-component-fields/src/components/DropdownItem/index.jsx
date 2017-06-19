import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';

export default class DropdownItem extends Component {
  static propTypes = {
    /**
     * Item label
     */
    label: PropTypes.string.isRequired,
    /**
     * Value to set on top level Dropdown component. (Defaults to the value of label)
     */
    value: PropTypes.string,
    /**
     * Used to force the selected state
     */
    isSelected: PropTypes.bool
  };

  static contextTypes = {
    selectedValue: PropTypes.any,
    updateDropdownValue: PropTypes.func
  };

  get onMouseDownHandler() {
    const {
      updateDropdownValue = () => {}
    } = this.context;

    return () => updateDropdownValue(this.value);
  }

  get value() {
    return this.props.value || this.props.label;
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
      <li>
        <div
          tabIndex="0"
          role="option"
          aria-selected={this.isSelected}
          onMouseDown={this.onMouseDownHandler}
          className={className}
        >
          {label}
          <span className={FieldsCss.dropdownItemCheck} />
        </div>
      </li>
    );
  }
}
