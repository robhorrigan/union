import React from 'react';
import { Link } from 'react-router';

/* Style dependencies */
import bsNav from '@union/bootstrap/lib/nav';
import bsUtils from '@union/bootstrap/lib/utilities';
import customStyles from './styles.css';

function NavLink({ href, children }, { router }) {
  /* Create a link element to normalize the given href */
  const link = document.createElement('a');
  link.href = href;

  let className = bsNav.navLink;

  if (link.pathname === router.location.pathname) {
    className = customStyles.activeNavLink;
  }

  return (<Link className={className} to={"/" + href}>{children}</Link>);
}

NavLink.contextTypes = {
  router: React.PropTypes.any
};

export function LinkGroup({ children, label }) {
  return (
    <div className={bsUtils.mb3}>
      {label ? <h6>{label}</h6> : ''}

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
