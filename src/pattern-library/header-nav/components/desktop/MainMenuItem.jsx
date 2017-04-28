import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/header-nav/css';
import SubMenu from '../SubMenu';

export function MainMenuItem({ rightOffset = false, ...props }) {
  let menuItemClass = 'main-menu-item';

  if (rightOffset) {
    menuItemClass = 'main-menu-item-right-offset';
  }

  return <li className={styles[menuItemClass]} {...props} />;
}

MainMenuItem.propTypes = {
  rightOffset: PropTypes.bool
};

export function MainMenuItemWithSubMenu({ label, href, children, ...props }) {
  return (
    <MainMenuItem {...props}>
      <a href={href} className={styles['main-menu-item-link']} data-click-role="navigate">
        {label}
      </a>
      <span className={styles['menu-pointer']} />
      <SubMenu className={styles['desktop-menu']}>
        {children}
      </SubMenu>
    </MainMenuItem>
  );
}

MainMenuItemWithSubMenu.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

