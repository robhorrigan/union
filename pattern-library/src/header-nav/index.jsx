import React, { PropTypes } from 'react';
import styles from '@xo-union/header-nav/css';
import { Button } from '@xo-union/buttons';

import * as NavItems from './components/NavItems'
import { NavItem } from './components/NavItem';


function Logo() {
  return (
    <li key="logo" className={styles['logo-container']}>
      <a className={styles.logo} href="/" />
    </li>
  );
}

export default function HeaderNav() {
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
        <NavItems.Tools />

        <NavItem>
          <Button size="baby" isCTA>
            SIGN UP
          </Button>
        </NavItem>

        <NavItem>
          <Button color="tertiary" size="baby" isCTA>
            LOG IN
          </Button>
        </NavItem>
      </ul>
    </nav>
  );
}

