import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@xo-union/icons';
import styles from '@xo-union/footer-nav/lib/css';

export const NavItem = ({ children, className = '' }) => (
  <li className={`${className} ${styles['nav-item']}`}>
    <h3 className={styles['nav-item-text']}>
      {children}
    </h3>
  </li>
);

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export const LogoLinkItem = ({ className = '', name, href }) => (
  <li className={`${className} ${styles['nav-item']}`}>
    <a href={href} className={styles['link-url']}>
      <Icon name={name} className={styles[name]} />
    </a>
  </li>
);

LogoLinkItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string
};

export const NavLinkItem = ({ href, className, children }) => (
  <NavItem className={className}>
    <a href={href} className={styles['link-url']} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </NavItem>
);

NavLinkItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string
};

export const SisterSitesNavItem = () => (
  <li className={styles['nav-item']}>
    <h3 className={styles['nav-sentence-container']}>
      <span>
        Check out our sister sites
      </span>
      <a href="//www.thebump.com" className={styles['keep-vertical-position']} >
        <Icon name="tb-logo" className={styles['tb-logo']} />
      </a>
      <span>
        and
      </span>
      <a href="//www.gigmasters.com" className={styles['link-url']}>GigMasters</a>
    </h3>
  </li>
);
