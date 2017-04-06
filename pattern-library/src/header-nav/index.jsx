import React, { PropTypes } from 'react';
import styles from '@xo-union/header-nav/css';
import topLevelItems from './nav-items.json';

console.log(topLevelItems);

export default function HeaderNav() {
  const listItems = topLevelItems.map(({ name, url, menuItems }) => {
    const menuItemComponents = menuItems.map(({ name, url }) =>
      <MenuItem href={url} key={name}>
        {name}
      </MenuItem>
    );

    return (
      <li key={name} className={styles['top-level-item']}>
        <a href={url} className={styles['top-level-item-link']}>
          {name}
        </a>
        <span className={styles['menu-pointer']} />
        <Menu>
          {menuItemComponents}
        </Menu>
      </li>
    );
  }
  );

  listItems.unshift(
    <li className={styles['logo-container']}>
      <a className={styles.logo} href="/"/>
    </li>
  );

  return (
    <nav>
      <ul className={styles.nav}>
        {listItems}
      </ul>
    </nav>
  );
}

function Menu({ children }) {
  return (
    <nav className={styles['dropdown-container']}>
      <ul className={styles.menu}>
        {children}
      </ul>
    </nav>
  );
}

function MenuItem({ href, children }) {
  return (
    <li className={styles['menu-item']}>
      <a href={href} className={styles['menu-item-link']}>
        {children}
      </a>
    </li>
  );
}
