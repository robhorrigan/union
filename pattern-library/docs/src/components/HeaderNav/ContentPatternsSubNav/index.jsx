import React, { Component } from 'react';
import CSS from 'react-css-modules';

import toggleable from '#docs/mixins/toggleable';

import NavWithGroups from '../Nav/NavWithGroups';
import subNavCss from '../SubNav/styles.css';
import seed from './seed.json';

const NUMBER_OF_GROUPS = 7;

@toggleable
@CSS(subNavCss)
export default class ContentPatternsSubNav extends Component {
  render() {
    return (
      <NavWithGroups
        styleName="sub-nav"
        role="menu"
        items={seed}
        numberOfGroups={NUMBER_OF_GROUPS}
      />
    );
  }
}
