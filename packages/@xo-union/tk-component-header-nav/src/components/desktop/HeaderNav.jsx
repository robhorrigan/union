import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-header-nav/lib/css';
import { SignUpButton, LogInButton } from '../accountButtons';

import * as MenuFactories from '../menuFactories';
import { MainMenuItemWithSubMenu, MainMenuItem } from './MainMenuItem';
import Logo from '../Logo';

function topLevelItems() {
  return MenuFactories.topLevelFactories().map(FactoryComponent =>
    <FactoryComponent Template={MainMenuItemWithSubMenu} key={FactoryComponent} />
  );
}
export default function HeaderNav({ loggedIn = false }) {
  const loggedOutNavItems = [
    <MainMenuItem key="1">
      <SignUpButton />
    </MainMenuItem>,
    <MainMenuItem key="2">
      <LogInButton>Log in</LogInButton>
    </MainMenuItem>
  ];

  return (
    <nav className={styles['desktop-header-nav']}>
      <ul className={styles['desktop-nav-item-list']}>
        <Logo />
        {topLevelItems()}
        <MenuFactories.Tools Template={MainMenuItemWithSubMenu} loggedIn={loggedIn} rightOffset />
        {loggedIn ? null : loggedOutNavItems}
      </ul>
    </nav>
  );
}

HeaderNav.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};
