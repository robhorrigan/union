import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-header-nav/lib/css';
import ClickTracker from '@xo-union/tk-component-analytics/lib/click-tracker';

export function SubNavLinkItem({ href, children, ...props }) {
  const analyticsProps = {};

  if (props['data-trackable-selection']) {
    analyticsProps['data-trackable-selection'] = props['data-trackable-selection'];
  } else {
    analyticsProps['data-trackable'] = true;
  }

  return (
    <li className={styles['sub-nav-item']}>
      <a href={href} className={styles['sub-nav-item-link']} {...analyticsProps}>
        {children}
      </a>
    </li>
  );
}

SubNavLinkItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  'data-trackable-selection': PropTypes.string
};

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
