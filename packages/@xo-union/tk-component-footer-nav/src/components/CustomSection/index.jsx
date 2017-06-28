import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import ClickTracker from '@xo-union/tk-component-analytics/lib/click-tracker';
import {
  createTrackableProps,
  PropTypes as TrackablePropTypes
} from '@xo-union/tk-component-analytics/lib/trackable';

export const CustomLinkItem = ({ href, trackableProps, children }) => (
  <li className={styles['custom-col']}>
    <a href={href} className={styles['nav-link']} {...createTrackableProps(trackableProps)}>
      {children}
    </a>
  </li>
);

CustomLinkItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  trackableProps: TrackablePropTypes.trackableProps
};

export function CustomSection({ children, analyticsProps = {} }) {
  return (
    <ClickTracker eventName="Footer Interaction" {...analyticsProps}>
      <div className={styles['custom-section-container']}>
        <div className={styles['custom-section']}>
          <ul className={styles['custom-row']}>
            {children}
          </ul>
        </div>
      </div>
    </ClickTracker>
  );
}

CustomSection.propTypes = {
  children: PropTypes.node,
  analyticsProps: PropTypes.shape({
    product: PropTypes.string
  })
};

