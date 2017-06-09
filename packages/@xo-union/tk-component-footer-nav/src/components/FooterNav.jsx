import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import ClickTracker from '@xo-union/tk-component-analytics/lib/click-tracker';
import BusinessSection from './BusinessSection';
import ApplicationSection from './ApplicationSection';
import SocialSection from './SocialSection';

export default function FooterNav({ analyticsProps }) {
  return (
    <ClickTracker eventName="Footer Interaction" {...analyticsProps}>
      <div className={styles.footer}>
        <SocialSection />
        <ApplicationSection />
        <BusinessSection />
      </div>
    </ClickTracker>
  );
}

FooterNav.propTypes = {
  analyticsProps: PropTypes.shape({
    product: PropTypes.string.isRequired
  }).isRequired
};
