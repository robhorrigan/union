import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@xo-union/tk-component-icons';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import { NewWindowAnchor } from '@xo-union/component-standard-elements/lib/anchor';
import {
  createTrackableProps,
  PropTypes as TrackablePropTypes
} from '@xo-union/tk-component-analytics/lib/trackable';

export default function BrandLogoLink({
  href,
  name,
  trackableProps,
  ...props
}) {
  return (
    <NewWindowAnchor
      href={href}
      className={styles['nav-link-with-icon']}
      {...props}
      {...createTrackableProps(trackableProps)}
    >
      <Icon name={name} className={styles[name]} />
    </NewWindowAnchor>
  );
}

BrandLogoLink.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  trackableProps: TrackablePropTypes.trackableProps
};

