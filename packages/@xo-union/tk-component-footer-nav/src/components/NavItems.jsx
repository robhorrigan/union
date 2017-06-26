import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import {
  NewWindowAnchor,
  AssumedTargetAnchor
} from '@xo-union/component-standard-elements/lib/anchor';
import BrandLogoLink from './BrandLogoLink';
import {
  XOGROUP_INC_HOST,
  XOGROUP_INC_QUERY
} from './constants';


export const NavItem = ({ children }) => (
  <li className={styles['nav-item']}>
    <h3 className={styles['nav-item-text']}>
      {children}
    </h3>
  </li>
);

NavItem.propTypes = {
  children: PropTypes.node.isRequired
};

export const NavLinkItem = ({ href, children, ...props }) => {
  let finalProps = props;

  if (!props['data-trackable-selection']) {
    finalProps = { 'data-trackable': true, ...props };
  }

  return (
    <NavItem>
      <AssumedTargetAnchor href={href} className={styles['nav-link']} {...finalProps}>
        {children}
      </AssumedTargetAnchor>
    </NavItem>
  );
};

NavLinkItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  'data-trackable-selection': PropTypes.string
};

export const SisterSitesNavItem = () => (
  <li className={styles['sister-sites-nav-item']}>
    <h3 className={styles['nav-item-text']}>
      <span>
        Check out our sister sites
      </span>
      <BrandLogoLink name="tb-logo" href="//www.thebump.com" data-trackable-selection="thebump" />
      and
      <NewWindowAnchor
        href="//www.gigmasters.com"
        className={styles['nav-link']}
        data-trackable-selection="gig masters"
      >
        GigMasters
      </NewWindowAnchor>
    </h3>
  </li>
);

export const XOGroupLinkNavItem = () => (
  <li className={styles['nav-item']}>
    <BrandLogoLink
      name="xo-logo"
      href={`${XOGROUP_INC_HOST}/xo-group-company.aspx?${XOGROUP_INC_QUERY}`}
      data-trackable-selection="xo group"
    />
  </li>
);
