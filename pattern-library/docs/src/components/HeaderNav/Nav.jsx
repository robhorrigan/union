import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import bsNav from '@xo-union/bootstrap/nav';
import { inject, observer } from 'mobx-react';

import styles from './styles.css';

function extractSubNavs(children) {
  const childArray = React.Children.toArray(children);

  return childArray.reduce(([ navs, others ], child) => {
    if (child.type === SubNav) {
      return [ [...navs, child], others ];
    }

    return [ navs, [...others, child] ];
  }, [ [], [] ]);
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
    const { to, children } = this.props;
    const [ subNavs, others ] = extractSubNavs(children);

    return (
      <li className={styles.navItemContainer}>
        <Link to={to} className={this.cssClass}>{others}</Link>
        {subNavs}
      </li>
    );
  }
}

export function SubNav({ children }) {
  return (
    <div className={styles.subNav}>
      <Nav>
        {children}
      </Nav>
    </div>
  );
}

export function Nav({ children }) {
  return (
    <nav>
      <ul className={styles.nav}>
        {children}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  children: PropTypes.node
};
