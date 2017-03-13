import React, { Component } from 'react';
import { Link } from 'react-router';
import CSS from 'react-css-modules';
import bsNav from '@xo-union/bootstrap/nav';
import bsUtils from '@xo-union/bootstrap/utilities';
import menuCss from './styles.css';

@CSS(bsNav)
export class List extends Component {
  render() {
    const additionalProps = {};
    const {
      children,
      role = "menu",
      align = "horizontal"
    } = this.props;

    if (align === 'vertical') {
      additionalProps.className = bsUtils.flexColumn;
    }

    return (
      <ul styleName="nav" role={role} {...additionalProps}>
        {children}
      </ul>
    );
  }
}

@CSS(null, { errorWhenNotFound: false })
export class Item extends Component {
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
