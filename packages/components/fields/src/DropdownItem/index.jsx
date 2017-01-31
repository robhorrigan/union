import React, { Component, PropTypes as T } from 'react';
import styles from '@union/fields-css';

export default class DropdownItem extends Component {
  static propTypes = {
    /**
     * Item label
     */
    label: T.string,
    /**
     * Value to set on top level Dropdown component. (Defaults to the value of label)
     */
    value: T.any
  };

  static contextTypes = {
    selectedValue: T.any,
    updateDropdown: T.func
  };

  _onMouseDown = (event) => {
    this.context.updateDropdown(event.target.dataset.value);
  };

  isSelected() {
    const { value, label } = this.props;

    if (this.props.isSelected) {
      return this.props.isSelected;
    }

    if (this.context.selectedValue === (value || label)) {
      return true;
    }

    return false;
  }

  render() {
    let className = styles.dropdownItem;
    const {
      label,
      value = label
    } = this.props;

    if (this.isSelected()) {
      className = styles.dropdownItemIsFocused;
    }

    return (
      <li className={className} data-value={value} onMouseDown={this._onMouseDown}>
        {label}
        <span className={styles.dropdownItemCheck} />
      </li>
    );
  }
}
