import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-header-nav/lib/css';

export function SubNavLinkItem({ href, children }) {
  return (
    <li className={styles['sub-nav-item']}>
      <a href={href} className={styles['sub-nav-item-link']}>
        {children}
      </a>
    </li>
  );
}

SubNavLinkItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
};

export default function SubNav({ children }) {
  return (
    <div className={styles['sub-nav-container']}>
      <ul className={styles['sub-nav-item-list']}>
        {children}
      </ul>
    </div>
  );
}

SubNav.propTypes = {
  children: PropTypes.node
};
