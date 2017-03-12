import React, { Component } from 'react';
import { Nav, NavItem, Item } from '#docs/components/Nav';
import logo from './theknotlogo.svg';
import styles from './logo.css';
import { observer, inject } from 'mobx-react';
import toggleable from '#docs/components/mixins/toggleable';

function LogoItem() {
  return (
    <Item to="/" containerClass={styles.logo} >
      <img alt="the knot logo" src={logo} />
    </Item>
  )
}

@toggleable
export default class PrimaryNav extends Component {
  render () {
    return (
      <Nav>
        <LogoItem />
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
}


