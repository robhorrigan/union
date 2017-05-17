import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import BusinessSection from './BusinessSection';
import ApplicationSection from './ApplicationSection';
import SocialSection from './SocialSection';
import SEOSection from './SEOSection';

export default function FooterNav({ children }) {
  return (
    <div className={styles.footer}>
      <SEOSection>
        {children}
      </SEOSection>
      <SocialSection />
      <ApplicationSection />
      <BusinessSection />
    </div>
  );
}

FooterNav.propTypes = {
  children: PropTypes.node
};
