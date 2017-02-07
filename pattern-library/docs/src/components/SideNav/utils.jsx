import React from 'react';
import { Link } from 'react-router';

/* Style dependencies */
import bsNav from '@xo-union/bootstrap/nav';
import bsUtils from '@xo-union/bootstrap/utilities';
import type from '@xo-union/typography';
import customStyles from './styles.css';

function NavLink({ href, children }, { router }) {
  let className = bsNav.navLink;

  if (href === router.location.pathname) {
    className = customStyles.activeNavLink;
  }

  return (<Link className={className} to={href}>{children}</Link>);
}

NavLink.contextTypes = {
  router: React.PropTypes.any
};

export function LinkGroup({ children, label }) {
  return (
    <div className={bsUtils.mb3}>
      {label ? <h6 className={type.h6}>{label}</h6> : ''}

      <ul className={[bsNav.nav, bsUtils.flexMdColumn].join(' ')}>
        {children}
      </ul>
    </div>
  );
}

export function NavItem({ children, href }) {
  return (
    <li className={bsNav.navItem}>
      <NavLink href={href}>{children}</NavLink>
    </li>
  );
}
