import React from 'react';
import styles from './styles';
import { Nav } from '#docs/components/Nav';

export function SubNav({ children, ...props }) {
  return (
    <Nav className={styles.subNav} {...props} aria-hidden="true" role="menu">
      {children}
    </Nav>
  );
}

export function SubNavContainer({ children }) {
  return (
    <div className={styles.subNavContainer}>
      {children}
    </div>
  );
}
