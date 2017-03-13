import React, { Component } from 'react';
import { NavItem } from '../NavItem'
import { Item } from '../List';
import { Nav } from '../Nav';
import logo from './theknotlogo.svg';
import logoCss from './logo.css';
import { observer, inject } from 'mobx-react';
import toggleable from '#docs/mixins/toggleable';

function LogoItem() {
  return (
    <Item to="/" styles={logoCss} >
      <img alt="the knot logo" src={logo} />
    </Item>
  )
}

@toggleable
export default class PrimaryNav extends Component {
  render () {
    return (
      <Nav role="menu">
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
