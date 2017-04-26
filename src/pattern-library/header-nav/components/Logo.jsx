import React from 'react';
import styles from '@xo-union/header-nav/css';
import Icon from '@xo-union/icons';

export default function Logo() {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <li className={styles['icon-container']}>
      <a href="/">
        <Icon name="tk-logo" className={styles.logo} />
      </a>
    </li>
  );
}

