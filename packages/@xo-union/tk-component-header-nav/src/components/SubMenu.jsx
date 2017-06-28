/* eslint-disable prefer-arrow-callback */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-header-nav/lib/css';
import {
  createTrackableProps,
  PropTypes as TrackablePropTypes
} from '@xo-union/tk-component-analytics/lib/trackable';

export default function SubMenu({ children, className = styles.menu, ...props }) {
  return (
    <nav className={styles['dropdown-container']} {...props}>
      <ul className={className}>
        {children}
      </ul>
    </nav>
  );
}

SubMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export function SubMenuLink({
  className = styles['sub-menu-item'],
  clickRole = 'navigate',
  trackableProps,
  ...props
}) {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <li className={className}>
      <a
        className={styles['sub-menu-item-link']}
        data-click-role={clickRole}
        {...createTrackableProps(trackableProps)}
        {...props}
      />
    </li>
  );
}

SubMenuLink.propTypes = {
  className: PropTypes.string,
  clickRole: PropTypes.string,
  trackableProps: TrackablePropTypes.trackableProps
};

