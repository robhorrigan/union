import React, { Component } from 'react';
import { Link } from 'react-router';
import bsNav from '@xo-union/bootstrap/nav';

import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';

import logo from '#docs/images/tk-logo.svg';
import styles from './styles.css';

class NavLinkClass {
  constructor({ routing, linkPath, nameMap }) {
    this.routing = routing;
    this.linkPath = linkPath;
    this.nameMap = nameMap;
  }

  @computed get name() {
    if (this.routing.currentPath === this.linkPath) {
      return this.nameMap.activeLink;
    }

    return this.nameMap.navLink;
  }
}

@inject('routing')
@observer
class NavItem extends Component {
  linkClass = new NavLinkClass({
    routing: this.props.routing,
    linkPath: this.props.to,
    nameMap: styles
  });

  render() {
    const { to, children } = this.props;

    return (
      <Link to={to} className={this.linkClass.name}>{children}</Link>
    );
  }
}

function Nav({ children }) {
  return (
    <nav className={bsNav.nav}>
      {children}
    </nav>
  );
}

export default class HeaderNav extends Component {
  render() {
    return (
      <header className={styles.headerNav}>
        <Nav>
          <NavItem to="/">
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
