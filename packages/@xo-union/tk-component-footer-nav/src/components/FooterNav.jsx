import React from 'react';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import BusinessSection from './BusinessSection';
import ApplicationSection from './ApplicationSection';
import SocialSection from './SocialSection';

export default function FooterNav() {
  return (
    <div className={styles.footer}>
      <SocialSection />
      <ApplicationSection />
      <BusinessSection />
    </div>
  );
}
