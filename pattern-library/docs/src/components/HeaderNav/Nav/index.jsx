import React, { Component, PropTypes } from 'react';
import CSS from 'react-css-modules';
import bsGrid from '@xo-union/bootstrap/grid';
import { List } from '../List';
import navCss from './styles';

@CSS(navCss)
export class Nav extends Component {
  static propTypes = {
    role: PropTypes.string,
    children: PropTypes.node
  };

  render() {
    const { children, role, ...props } = this.props;

    return (
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
  static propTypes = {
    role: PropTypes.string,
    children: PropTypes.node
  };

  render() {
    const { children, role, ...props } = this.props;

    return (
      <nav styleName="nav" {...props} >
        <div className={bsGrid.row} role={role}>
          {children}
        </div>
      </nav>
    );
  }
}
