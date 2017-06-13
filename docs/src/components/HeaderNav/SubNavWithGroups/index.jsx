import React, { Component } from 'react';
import CSS from 'react-css-modules';

import toggleable from '#docs/mixins/toggleable';

import NavWithGroups from '../Nav/NavWithGroups';
import subNavCss from '../SubNav/styles.css';

@toggleable
@CSS(subNavCss)
export default class SubNavWithGroups extends Component {
  render() {
    return (<NavWithGroups styleName="sub-nav" role="menu" {...this.props} />);
  }
}
