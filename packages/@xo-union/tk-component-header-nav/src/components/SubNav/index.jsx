import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-header-nav/lib/css';
import ClickTracker from '@xo-union/tk-component-analytics/lib/click-tracker';

export default function SubNav({ children, analyticsProps = {} }) {
  return (
    <ClickTracker
      eventName="Menu Interaction"
      eventData={element => ({
        userDecisionArea: 'sub nav',
        selectionURL: element.href
      })}
      {...analyticsProps}
    >
      <div className={styles['sub-nav-container']}>
        <ul className={styles['sub-nav-item-list']}>
          {children}
        </ul>
      </div>
    </ClickTracker>
  );
}

SubNav.propTypes = {
  children: PropTypes.node,
  analyticsProps: PropTypes.shape({
    product: PropTypes.string
  })
};
