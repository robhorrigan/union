import React, { Component, PropTypes } from 'react';
import { Menu } from '../Menu';
import navCss from './styles';
import CSS from 'react-css-modules';

@CSS(navCss)
export class Nav extends Component {
  render() {
    return <Menu role="menubar" styleName="nav" {...this.props} />
  }
}
