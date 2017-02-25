import React, { Component } from 'react';

import logo from '#docs/images/tk-logo.svg';
import styles from './styles.css';
import { Nav, NavItem } from './Nav';
import { Arrow } from './Icons';

export default class HeaderNav extends Component {
  render() {
    return (
      <header className={styles.headerNav}>
        <Nav>
          <NavItem to="/">
            <Arrow />
            The Knot Pattern Library
          </NavItem>
          <NavItem to="/getting-started">Getting Started</NavItem>
          <NavItem to="/core-components">Core Components</NavItem>
          <NavItem to="/content-patterns">Content Patterns</NavItem>
        </Nav>
      </header>
    );
  }
}
