import React from 'react';
import bsUtils from '@xo-union/bootstrap/utilities';
import logo from '#docs/images/tk-logo.svg';
import styles from './styles.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.link} href="/">
        <img alt="the knot logo" src={logo} height="40" className={bsUtils.alignBaseline} />
        <span>Union</span>
      </a>
    </header>
  );
}
