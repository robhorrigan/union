import React, { Component, PropTypes } from 'react';
import { List } from '../List';
import navCss from './styles';
import bsGrid from '@xo-union/bootstrap/grid';
import CSS from 'react-css-modules';

@CSS(navCss)
export class Nav extends Component {
  render() {
    const { children, role, ...props } = this.props;

    return(
      <nav styleName="nav" {...props} >
        <List role={role}>
          {children}
        </List>
      </nav>
    );
  }
}

@CSS(navCss)
export class GridedNav extends Component {
  render() {
    const { children, role, ...props } = this.props;

    return(
      <nav styleName="nav" {...props} >
        <div className={bsGrid.row} role={role}>
          {children}
        </div>
      </nav>
    );
  }
}
