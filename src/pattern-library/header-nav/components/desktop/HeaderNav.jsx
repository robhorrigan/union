import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/header-nav/css';
import { Button } from '@xo-union/buttons';

import * as MenuFactories from '../MenuFactories';
import { MainMenuItemWithSubMenu, MainMenuItem } from './MainMenuItem';
import Logo from '../Logo';

function topLevelItems() {
  return MenuFactories.topLevelFactories().map(FactoryComponent =>
    <FactoryComponent Template={MainMenuItemWithSubMenu} />
  );
}

export default function HeaderNav({ loggedIn = false }) {
  const loggedOutNavItems = [
    <MainMenuItem>
      <Button size="baby" isCTA>
        SIGN UP
      </Button>
    </MainMenuItem>,
    <MainMenuItem>
      <Button color="tertiary" size="baby" isCTA>
        LOG IN
      </Button>
    </MainMenuItem>
  ];

  return (
    <nav className={styles['desktop-header-nav']}>
      <ul className={styles['desktop-nav-item-list']}>
        <Logo />
        {topLevelItems()}
        <MenuFactories.Tools Template={MainMenuItemWithSubMenu} loggedIn={loggedIn} rightOffset />
        { loggedIn ? null : loggedOutNavItems }
      </ul>
    </nav>
  );
}

HeaderNav.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};
