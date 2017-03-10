import React from 'react';
import bsNavbar from '@xo-union/bootstrap/navbar';

import styles from './styles.css';
import { Nav, NavItem } from './Nav';
import logo from './theknotlogo.svg';
import Arrow from './Arrow';

function PrimaryNav() {
  return (
    <Nav>
      <a className={styles.logo} href="/">
        <img alt="the knot logo" src={logo} />
      </a>
      <NavItem to="/design-principles">Design Principles</NavItem>
      <NavItem to="/design-foundations">Design Foundations</NavItem>
      <NavItem to="/pattern-library">Pattern Library</NavItem>
      <NavItem disabled>Brand Voice & Copy</NavItem>
      <NavItem disabled>Email</NavItem>
    </Nav>
  );
}

function PatternLibraryNav() {
  return (
    <Nav>
      <NavItem to="/">
        <Arrow />
        The Knot Pattern Library
      </NavItem>
      <NavItem to="/getting-started">Getting Started</NavItem>
      <NavItem to="/core-components">Core Components</NavItem>
      <NavItem to="/content-patterns">Content Patterns</NavItem>
    </Nav>
  );
}

export default function HeaderNav() {
  return (
    <header className={styles.headerNav}>
      <PrimaryNav />
    </header>
  );
}
