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
    updateDropdownValue: T.func
  };

  value = this.props.value || this.props.label;

  _onMouseDown = (event) => {
    this.context.updateDropdownValue(this.value);
  };

  isSelected() {
    if (this.props.isSelected) {
      return this.props.isSelected;
    }

    if (this.context.selectedValue === this.value) {
      return true;
    }

    return false;
  }

  render() {
    let className = styles.dropdownItem;
    const { label } = this.props;

    if (this.isSelected()) {
      className = styles.dropdownItemIsFocused;
    }

    return (
      <li className={className} onMouseDown={this._onMouseDown}>
        {label}
        <span className={styles.dropdownItemCheck} />
      </li>
    );
  }
}
