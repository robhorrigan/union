import React from 'react';
import { Link } from 'react-router';
import bsNav from '@xo-union/bootstrap/nav';

import logo from '#docs/images/tk-logo.svg';
import styles from './styles.css';


function NavItem({ to, children }) {
  return (
    <Link to={to} className={styles.navLink}>{children}</Link>
  );
}

function Nav({ children }) {
  return (
    <nav className={bsNav.nav}>
      {children}
    </nav>
  );
}

export default function HeaderNav() {
  return (
    <header className={styles.headerNav}>
      <Nav>
        <NavItem to="/">The Knot Pattern Library</NavItem>
        <NavItem to="/getting-started">Getting Started</NavItem>
        <NavItem to="/core-components">Core Components</NavItem>
        <NavItem to="/content-patterns">Content Patterns</NavItem>
      </Nav>
    </header>
  );
}
