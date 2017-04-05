import React, { PropTypes } from 'react';
import styles from '@xo-union/header-nav/css';

const topLevelItems = [
  {
    text: 'Local Vendor',
    url: ''
  },
  {
    text: 'Wedding Website',
    url: ''
  },
  {
    text: 'Registry',
    url: ''
  },
  {
    text: 'Rings + Dresses',
    url: ''
  },
  {
    text: 'Photos',
    url: ''
  },
  {
    text: 'Ideas & Advice',
    url: ''
  },
  {
    text: 'Shop',
    url: ''
  }
];

export default function HeaderNav({ }) {
  const listItems = topLevelItems.map(({ text, url }) =>
    <li key={text} className={styles['top-level-item']}>
      <a href={url} className={styles['top-level-item-link']}>
        {text}
      </a>
    </li>
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

HeaderNav.propTypes = {
  test: PropTypes.string
};
