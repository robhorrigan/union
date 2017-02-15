import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/* Style dependencies */
import bsNav from '@xo-union/bootstrap/nav';
import bsUtils from '@xo-union/bootstrap/utilities';
import customStyles from './styles.css';

function NavLink({ href, children }, { router }) {
  let className = bsNav.navLink;

  if (href === router.location.pathname) {
    className = customStyles.activeNavLink;
  }

  return (<Link className={className} to={href}>{children}</Link>);
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

NavLink.contextTypes = {
  router: PropTypes.any
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

LinkGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired
};

export function NavItem({ children, href }) {
  return (
    <li className={bsNav.navItem}>
      <NavLink href={href}>{children}</NavLink>
    </li>
  );
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};
