import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/footer-nav/lib/css';

export default function NavItemList({ children }) {
  return (
    <ul className={styles['nav-link-list']}>
      {children}
    </ul>
  );
}

NavItemList.propTypes = {
  children: PropTypes.node.isRequired
};
