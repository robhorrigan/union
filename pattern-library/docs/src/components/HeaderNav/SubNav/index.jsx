import React, { Component } from 'react';
import CSS from 'react-css-modules';
import subnavCss from './styles';

@CSS(subnavCss)
export class SubNavContainer extends Component {
  render() {
    return <div styleName="sub-nav-container" {...this.props} />
  }
}
