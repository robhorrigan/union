import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-header-nav/lib/css';
import Icon from '@xo-union/tk-component-icons';

function MobileMenuButton({ onClick, isOpen, closedIconName, ...props }) {
  let iconName = closedIconName;

  if (isOpen) {
    iconName = 'close';
  }

  return (
    <li className={styles['icon-container']}>
      <button
        onClick={onClick}
        className={styles['icon-button']}
        {...props}
      >
        <Icon name={iconName} className={styles['menu-icon']} />
      </button>
    </li>
  );
}

MobileMenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  closedIconName: PropTypes.string.isRequired
};

MobileMenuButton.defaultProps = {
  onClick() {},
  isOpen: false
};


export function ToolsMenuButton(props) {
  const selectionState = props.isOpen ? 'Closed' : 'Opened';

  return (
    <MobileMenuButton
      closedIconName="nav-signup-mobile"
      data-trackable-selection={`${selectionState} Tools Menu`}
      {...props}
    />
  );
}

ToolsMenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export function PrimaryMenuButton(props) {
  const selectionState = props.isOpen ? 'Closed' : 'Opened';

  return (
    <MobileMenuButton
      closedIconName="hamburger"
      data-trackable-selection={`${selectionState} Primary Menu`}
      {...props}
    />
  );
}

PrimaryMenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired
};
