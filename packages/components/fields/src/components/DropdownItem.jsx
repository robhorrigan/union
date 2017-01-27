import React, { Component, PropTypes as T } from 'react';
import styles from '@union/fields-css';

export default class DropdownItem extends Component {
  static contextTypes = {
    selectedValue: T.any
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
      <li className={className} data-value={value}>
        {label}
        <span className={styles.dropdownItemCheck} />
      </li>
    );
  }
}
