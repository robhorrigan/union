import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/header-nav/lib/css';
import Icon from '@xo-union/icons';

function MobileMenuButton({ onClick, isOpen, closedIconName }) {
  let iconName = closedIconName;

  if (isOpen) {
    iconName = 'close';
  }

  return (
    <li className={styles['icon-container']}>
      <button onClick={onClick} className={styles['icon-button']}>
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
  return <MobileMenuButton closedIconName="nav-signup-mobile" {...props} />;
}

export function PrimaryMenuButton(props) {
  return <MobileMenuButton closedIconName="hamburger" {...props} />;
}

