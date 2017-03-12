import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import bsNav from '@xo-union/bootstrap/nav';
import { inject, observer } from 'mobx-react';

import styles from './styles.css';

export function Item({
  role,
  containerClass,
  linkClass,
  to,
  children,
  ...props
}) {
  return (
    <li role={role} className={containerClass} {...props}>
      <Link to={to} className={linkClass}>{children}</Link>
    </li>
  );
}

@inject('router')
@observer
export class NavItem extends Component {
  static propTypes = {
    router: PropTypes.shape({ currentPath: PropTypes.string }),
    to: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node
  };

  get cssClass() {
    const { router, to, disabled } = this.props;

    if (disabled) {
      return styles.disabledItem;
    }

    if (router.inPath(to)) {
      return styles.activeItem;
    }

    return styles.navItem;
  }

  render() {
    const {
      to,
      children,
      router,
      disabled,
      ...props
    } = this.props;

    return (
      <Item
        role="menuitem"
        containerClass={styles.navItemContainer}
        linkClass={this.cssClass}
        to={to}
        {...props}>
        {children}
      </Item>
    );
  }
}

@inject('toggler')
export class NavItemWithSubNav extends Component {
  render() {
    const { toggles, to, children, toggler, ...props } = this.props;

    return (
      <NavItem
        to={to}
        aria-owns={toggles}
        aria-haspopup
        onMouseEnter={() => toggler.show(toggles)}
        onMouseLeave={() => toggler.hide(toggles)}
        >
        {children}
      </NavItem>
    );
  }
}

export function Nav({ children, role = 'menubar', ...props }) {
  return (
    <nav {...props}>
      <ul className={styles.nav} role={role}>
        {children}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  children: PropTypes.node
};

NavItem.WithSubNav = NavItemWithSubNav;
