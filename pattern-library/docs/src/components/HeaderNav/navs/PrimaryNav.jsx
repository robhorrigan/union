import React from 'react';
import { Nav, NavItem } from './Nav';
import logo from './theknotlogo.svg';
import styles from './logo.css';

export default function PrimaryNav() {
  return (
    <Nav>
      <a className={styles.logo} href="/">
        <img alt="the knot logo" src={logo} />
      </a>
      <NavItem to="/design-principles">
        Design Principles
      </NavItem>
      <NavItem to="/design-foundations">Design Foundations</NavItem>
      <NavItem to="/pattern-library/getting-started">Pattern Library</NavItem>
      <NavItem disabled>Brand Voice & Copy</NavItem>
      <NavItem disabled>Email</NavItem>
    </Nav>
  );
}


