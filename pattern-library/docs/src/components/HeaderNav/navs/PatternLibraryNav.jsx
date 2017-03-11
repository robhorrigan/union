import React from 'react';
import Arrow from '../Arrow';
import { Nav, NavItem, SubNav } from './Nav';

export default function PatternLibraryNav() {
  return (
    <Nav>
      <NavItem to="/">
        <Arrow />
        The Knot Pattern Library
      </NavItem>
      <NavItem to="/pattern-library/getting-started">Getting Started</NavItem>
      <NavItem to="/pattern-library/core-components">
        Core Components

        <SubNav>
          <NavItem to="/pattern-library/core-components/typography"> Typography </NavItem>
          <NavItem to="/pattern-library/core-components/colors"> Colors </NavItem>
          <NavItem to="/pattern-library/core-components/buttons"> Buttons </NavItem>
          <NavItem to="/pattern-library/core-components/form-elements"> Form Elements </NavItem>
          <NavItem to="/pattern-library/core-components/spacing"> Spacing </NavItem>
          <NavItem to="/pattern-library/core-components/iconography"> Iconography </NavItem>
          <NavItem to="/pattern-library/core-components/grid"> Grid </NavItem>
        </SubNav>
      </NavItem>

      <NavItem to="/pattern-library/content-patterns">
        Content Patterns
      </NavItem>
    </Nav>
  );
}
