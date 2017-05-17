import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-footer-nav/lib/css';

export function SEOLinkItem({ href, children }) {
  return (
    <li className={styles['seo-col']}>
      <a href={href} className={styles['nav-link']}>
        {children}
      </a>
    </li>
  );
}

SEOLinkItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
};

export default function SEOSection({ children }) {
  return (
    <div className={styles['seo-section-container']}>
      <div className={styles['seo-section']}>
        <ul className={styles['seo-row']}>
          {children}
        </ul>
      </div>
    </div>
  );
}

SEOSection.propTypes = {
  children: PropTypes.node
};

