import React, { Component } from 'react';
import CSS from 'react-css-modules';
import subnavCss from './styles';
import { SubMenu } from '../Menu';

@CSS(subnavCss)
export class SubNavContainer extends Component {
  render() {
    return <div styleName="sub-nav-container" {...this.props} />
  }
}

@CSS(subnavCss)
export class SubNav extends Component {
  render() {
    return <SubMenu styleName="sub-nav" {...this.props} />
  }
}
