import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-footer-nav/lib/css';

export default function NavItemList({ children, className = '' }) {
  return (
    <ul className={`${className} ${styles['nav-item-list']}`}>
      {children}
    </ul>
  );
}

NavItemList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
