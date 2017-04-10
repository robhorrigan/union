import React from 'react';
import styles from '@xo-union/header-nav/css';

function Menu({ children }) {
  return (
    <nav className={styles['dropdown-container']}>
      <ul className={styles.menu}>
        {children}
      </ul>
    </nav>
  );
}

export function MenuItem({ className = styles['menu-item'], children, ...props }) {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
}

export function MenuLink({ href, children }) {
  return (
    <MenuItem>
      <a href={href} className={styles['menu-item-link']}>
        {children}
      </a>
    </MenuItem>
  );
}
export function NavLinkWithMenu({ label, url, children, ...props }) {
  return (
    <NavItem {...props}>
      <a href={url} className={styles['nav-link']}>
        {label}
      </a>
      <span className={styles['menu-pointer']} />
      <Menu>
        {children}
      </Menu>
    </NavItem>
  );
}

export function NavItem({ pushedToRight = false, children }) {
  let topLevelClass = 'nav-item';

  if (pushedToRight) {
    topLevelClass = 'nav-item-pushed-to-right';
  }

  return (
    <li className={styles[topLevelClass]}>
      {children}
    </li>
  );
}


