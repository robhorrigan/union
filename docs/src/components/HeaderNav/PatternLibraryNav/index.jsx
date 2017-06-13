import React from 'react';
import toggleable from '#docs/mixins/toggleable';
import Arrow from '../Arrow';
import Nav from '../Nav';
import NavItem, { NavItemWithSubNav } from '../NavItem';
import ids from '../ids';

export default toggleable(() =>
  <Nav role="menubar">
    <NavItem to="/">
      <Arrow />
      The Knot Pattern Library
    </NavItem>
    <NavItem to="/pattern-library/getting-started">
      Getting Started
    </NavItem>
    <NavItemWithSubNav
      to="/pattern-library/core-components"
      toggles={ids.secondaryNavCoreComponents}
    >
      Core Components
    </NavItemWithSubNav>

    <NavItemWithSubNav
      to="/pattern-library/content-patterns"
      toggles={ids.secondaryNavContentPattern}
    >
      Content Patterns
    </NavItemWithSubNav>
    <NavItemWithSubNav
      to="/pattern-library/utilities"
      toggles={ids.secondaryNavUtilities}
    >
      Utilities
    </NavItemWithSubNav>
  </Nav>
);
