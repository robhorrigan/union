import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
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
      <NavItem to="/pattern-library/getting-started">Pattern Library</NavItem>
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
      <NavItem to="/pattern-library/getting-started">Getting Started</NavItem>
      <NavItem to="/pattern-library/core-components">Core Components</NavItem>
      <NavItem to="/pattern-library/content-patterns">Content Patterns</NavItem>
    </Nav>
  );
}

@inject('router')
@observer
export default class HeaderNav extends Component {
  navComponent() {
    if (this.props.router.inPath('/pattern-library')) return PatternLibraryNav;

    return PrimaryNav;
  }

  render() {
    const NavComponent = this.navComponent();

    return (
      <header className={styles.headerNav}>
        <NavComponent />
      </header>
    );
  }
}
