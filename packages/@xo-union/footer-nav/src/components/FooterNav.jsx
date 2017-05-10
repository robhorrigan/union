import React from 'react';
import styles from '@xo-union/footer-nav/lib/css';
import BusinessSection from './BusinessSection';
import ApplicationSection from './ApplicationSection';

export default function FooterNav() {
  return (
    <div className={styles.footer}>
      <ApplicationSection />
      <BusinessSection />
    </div>
  );
}
