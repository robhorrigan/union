import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-footer-nav/lib/css';

export function CustomLinkItem({ href, children }) {
  return (
    <li className={styles['custom-col']}>
      <a href={href} className={styles['nav-link']}>
        {children}
      </a>
    </li>
  );
}

CustomLinkItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
};

export function CustomSection({ children }) {
  return (
    <div className={styles['custom-section-container']}>
      <div className={styles['custom-section']}>
        <ul className={styles['custom-row']}>
          {children}
        </ul>
      </div>
    </div>
  );
}

CustomSection.propTypes = {
  children: PropTypes.node
};

