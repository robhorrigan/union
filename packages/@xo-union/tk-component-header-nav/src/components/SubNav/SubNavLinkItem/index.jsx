import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-header-nav/lib/css';
import {
  createTrackableProps,
  PropTypes as TrackablePropTypes
} from '@xo-union/tk-component-analytics/lib/trackable';

function SubNavLinkItem({ href, children, trackableProps, ...props }) {
  return (
    <li className={styles['sub-nav-item']} {...props}>
      <a
        href={href}
        className={styles['sub-nav-item-link']}
        {...createTrackableProps(trackableProps)}
      >
        {children}
      </a>
    </li>
  );
}

SubNavLinkItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  trackableProps: TrackablePropTypes.trackableProps
};

export default SubNavLinkItem;
