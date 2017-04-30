import React, { Component } from 'react';
import CSS from 'react-css-modules';

import toggleable from '#docs/mixins/toggleable';

import NavItem from '../NavItem';
import Nav from '../Nav';
import subNavCss from '../SubNav/styles.css';

@toggleable
@CSS(subNavCss)
export default class CoreComponentsSubNav extends Component {
  render() {
    return (
      <Nav styleName="sub-nav">
        <NavItem to="/pattern-library/core-components/typography"> Typography </NavItem>
        <NavItem to="/pattern-library/core-components/colors"> Colors </NavItem>
        <NavItem to="/pattern-library/core-components/buttons"> Buttons </NavItem>
        <NavItem to="/pattern-library/core-components/form-elements"> Form Elements </NavItem>
        <NavItem to="/pattern-library/core-components/spacing"> Spacing </NavItem>
        <NavItem to="/pattern-library/core-components/iconography"> Iconography </NavItem>
        <NavItem to="/pattern-library/core-components/grid"> Grid </NavItem>
      </Nav>
    );
  }

}
