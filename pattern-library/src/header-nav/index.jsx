import React, { PropTypes } from 'react';
import styles from '@xo-union/header-nav/css';
import { Button } from '@xo-union/buttons';

import * as NavItems from './components/NavItems';
import { NavItem } from './components/NavItem';


function Logo() {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <li className={styles['logo-container']}>
      <a className={styles.logo} href="/" />
    </li>
  );
}

export default function HeaderNav({ loggedIn = false }) {
  const loggedOutNavItems = [
    <NavItem>
      <Button size="baby" isCTA>
        SIGN UP
      </Button>
    </NavItem>,
    <NavItem>
      <Button color="tertiary" size="baby" isCTA>
        LOG IN
      </Button>
    </NavItem>
  ];

  return (
    <nav>
      <ul className={styles.nav}>
        <Logo />
        <NavItems.LocalVendors />
        <NavItems.WeddingWebsites />
        <NavItems.Registry />
        <NavItems.Fashion />
        <NavItems.RealWeddings />
        <NavItems.Content />
        <NavItems.Shop />
        <NavItems.Tools loggedIn={loggedIn} />
        { loggedIn ? null : loggedOutNavItems }
      </ul>
    </nav>
  );
}

HeaderNav.propTypes = {
  /* Whether or not to render the logged in version */
  loggedIn: PropTypes.bool
};
