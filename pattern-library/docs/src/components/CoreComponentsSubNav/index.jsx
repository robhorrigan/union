import React, { Component, PropTypes } from 'react';
import { NavItem, Nav } from '#docs/components/Nav';
import { SubNav } from '#docs/components/SubNav';
import { observer, inject } from 'mobx-react';
import toggleable from '#docs/components/mixins/toggleable';

@toggleable
export default class CoreComponentsSubNav extends Component {
  render() {
    return (
      <SubNav>
        <NavItem to="/pattern-library/core-components/typography"> Typography </NavItem>
        <NavItem to="/pattern-library/core-components/colors"> Colors </NavItem>
        <NavItem to="/pattern-library/core-components/buttons"> Buttons </NavItem>
        <NavItem to="/pattern-library/core-components/form-elements"> Form Elements </NavItem>
        <NavItem to="/pattern-library/core-components/spacing"> Spacing </NavItem>
        <NavItem to="/pattern-library/core-components/iconography"> Iconography </NavItem>
        <NavItem to="/pattern-library/core-components/grid"> Grid </NavItem>
      </SubNav>
    );
  }

}
