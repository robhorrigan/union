import React, { Component } from 'react';
import { Link } from 'react-router';
import CSS from 'react-css-modules';
import bsNav from '@xo-union/bootstrap/nav';
import menuCss from './styles.css';

@CSS(bsNav)
export class Menu extends Component {
  render() {
    const { children, role = "menu", ...props } = this.props;

    return (
      <nav {...props}>
        <ul styleName="nav" role={role}>
          {children}
        </ul>
      </nav>
    );
  }

}

@CSS(menuCss)
export class SubMenu extends Component {
  render() {
    return <Menu aria-hidden="true" styleName="sub-menu" {...this.props} />
  }
}

@CSS(null, { errorWhenNotFound: false })
export class MenuItem extends Component {
  render() {
    const {
      role,
      to,
      children,
      styles,
      ...props
    } = this.props;

    return (
      <li role={role} styleName="container" {...props}>
        <Link to={to} styleName="link">{children}</Link>
      </li>
    );
  }
}

