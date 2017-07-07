import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import {
  createTrackableProps,
  PropTypes as TrackablePropTypes
} from '@xo-union/tk-component-analytics/lib/trackable';
import {
  NewWindowAnchor,
  AssumedTargetAnchor
} from '@xo-union/component-standard-elements/lib/anchor';
import BrandLogoLink from './BrandLogoLink';
import {
  XOGROUP_INC_HOST,
  XOGROUP_INC_QUERY
} from './constants';


export const NavItem = ({ children, className = styles['nav-item'] }) => (
  <li className={className}>
    <h3 className={styles['nav-item-text']}>
      {children}
    </h3>
  </li>
);


NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const NavLinkItem = ({ href, children, className, trackableProps }) => (
  <NavItem className={className}>
    <AssumedTargetAnchor
      href={href}
      className={styles['nav-link']}
      {...createTrackableProps(trackableProps)}
    >
      {children}
    </AssumedTargetAnchor>
  </NavItem>
);

NavLinkItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  trackableProps: TrackablePropTypes.trackableProps,
};

export const SisterSitesNavItem = () => (
  <li className={styles['sister-sites-nav-item']}>
    <h3 className={styles['nav-item-text']}>
      <span>
        Check out our sister sites
      </span>
      <BrandLogoLink
        name="tb-logo"
        href="//www.thebump.com"
        trackableProps={{ selection: 'thebump' }}
      />
      <span>and</span>
      <NewWindowAnchor
        href="//www.gigmasters.com"
        className={styles['nav-link']}
        {...createTrackableProps({ selection: 'gig masters' })}
      >
        GigMasters
      </NewWindowAnchor>
    </h3>
  </li>
);

export const XOGroupLinkNavItem = () => (
  <li className={styles['xo-logo-nav-item']}>
    <BrandLogoLink
      name="xo-logo"
      href={`${XOGROUP_INC_HOST}/xo-group-company.aspx?${XOGROUP_INC_QUERY}`}
      trackableProps={{ selection: 'xo group' }}
    />
  </li>
);
