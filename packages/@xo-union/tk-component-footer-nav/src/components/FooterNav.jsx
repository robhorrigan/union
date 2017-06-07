import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import ClickTracker from '@xo-union/tk-component-analytics/lib/click-tracker';
import BusinessSection from './BusinessSection';
import ApplicationSection from './ApplicationSection';
import SocialSection from './SocialSection';
import SEOSection from './SEOSection';

export default function FooterNav({ children, analyticsProps }) {
  return (
    <ClickTracker eventName="Footer Interaction" {...analyticsProps}>
      <div className={styles.footer}>
        <SEOSection>
          {children}
        </SEOSection>
        <SocialSection />
        <ApplicationSection />
        <BusinessSection />
      </div>
    </ClickTracker>
  );
}

FooterNav.propTypes = {
  children: PropTypes.node,
  analyticsProps: PropTypes.shape({
    product: PropTypes.string.isRequired
  }).isRequired
};
