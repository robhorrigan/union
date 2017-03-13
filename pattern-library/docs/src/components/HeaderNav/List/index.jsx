import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSS from 'react-css-modules';
import bsNav from '@xo-union/bootstrap/nav';
import bsUtils from '@xo-union/bootstrap/utilities';

@CSS(bsNav)
export class List extends Component {
  static propTypes = {
    children: PropTypes.node,
    role: PropTypes.string,
    align: PropTypes.oneOf(['vertical', 'horizontal'])
  };

  static defaultProps = {
    role: 'menu',
    align: 'horizontal'
  };

  render() {
    const additionalProps = {};
    const { children, role, align } = this.props;

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
  static propTypes = {
    children: PropTypes.node,
    role: PropTypes.string,
    to: PropTypes.string,
    styles: PropTypes.shape({
      container: PropTypes.string,
      link: PropTypes.string
    })
  };

  render() {
    const {
      role,
      to,
      children,
      styles, // eslint-disable-line no-unused-vars
      ...props
    } = this.props;

    return (
      <li role={role} styleName="container" {...props}>
        <Link to={to} styleName="link">{children}</Link>
      </li>
    );
  }
}
