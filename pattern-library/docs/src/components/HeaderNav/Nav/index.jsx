import React, { Component, PropTypes } from 'react';
import CSS from 'react-css-modules';
import { List } from '../List';
import navCss from './styles';

@CSS(navCss)
export default class Nav extends Component {
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
