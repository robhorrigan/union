import React, { PropTypes } from 'react';
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

Menu.propTypes = {
  children: PropTypes.node
};

export function MenuLink({ href, children }) {
  return (
    <li className={styles['menu-item']}>
      <a href={href} className={styles['menu-item-link']}>
        {children}
      </a>
    </li>
  );
}

MenuLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

export function NavLinkWithMenu({ label, href, children, ...props }) {
  return (
    <NavItem {...props}>
      <a href={href} className={styles['nav-link']}>
        {label}
      </a>
      <span className={styles['menu-pointer']} />
      <Menu>
        {children}
      </Menu>
    </NavItem>
  );
}

NavLinkWithMenu.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node
};

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

NavItem.propTypes = {
  pushedToRight: PropTypes.bool,
  children: PropTypes.node
};
