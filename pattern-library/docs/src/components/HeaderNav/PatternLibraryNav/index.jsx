import React, { Component } from 'react';
import Arrow from '../Arrow';
import { Nav } from '../Nav';
import { NavItem } from '../NavItem';
import toggleable from '#docs/mixins/toggleable';
import ids from '../ids';

@toggleable
export default class PatternLibraryNav extends Component {
  render() {
    return (
      <Nav>
        <NavItem to="/"> <Arrow /> The Knot Pattern Library </NavItem>
        <NavItem to="/pattern-library/getting-started">Getting Started</NavItem>
        <NavItem.WithSubNav to="/pattern-library/core-components" toggles={ids.secondaryNavCoreComponents}>
          Core Components
        </NavItem.WithSubNav>

        <NavItem.WithSubNav to="/pattern-library/content-patterns" toggles={ids.secondaryNavContentPattern}>
          Content Patterns
        </NavItem.WithSubNav>
      </Nav>
    );
  }
}
