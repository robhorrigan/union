import React, { PropTypes } from 'react';
import styles from '@xo-union/header-nav/css';

const topLevelItems = [
  'Local Vendor',
  'Wedding Website',
  'Registry',
  'Rings + Dresses',
  'Photos',
  'Ideas & Advice',
  'Shop'
];

export default function HeaderNav({ }) {
  const listItems = topLevelItems.map((text) => {
    return <li key={text} className={styles['top-level-item']}>{text}</li>;
  });

  listItems.unshift(
    <li className={styles['logo']} />
  )
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
