import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSS from 'react-css-modules';
import listCss from './styles.css';

@CSS(listCss)
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
    const { children, role, align } = this.props;
    const additionalProps = { styleName: 'list' };

    if (align === 'vertical') {
      additionalProps.styleName = 'vertical-list';
    }

    return (
      <ul role={role} {...additionalProps}>
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
