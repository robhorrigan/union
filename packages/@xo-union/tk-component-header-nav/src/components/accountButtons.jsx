/* eslint-disable prefer-arrow-callback */
import React from 'react';
import { Button } from '@xo-union/tk-component-buttons';
import styles from '@xo-union/tk-component-header-nav/lib/css';
import {
  createTrackableProps,
  PropTypes as TrackablePropTypes
} from '@xo-union/tk-component-analytics/lib/trackable';

export function SignUpButton({ trackableProps, ...props }) {
  return (
    <Button
      size="baby"
      className={styles.button}
      data-click-role="sign-up"
      isCTA
      {...createTrackableProps(trackableProps)}
      {...props}
    >
      Sign up
    </Button>
  );
}

SignUpButton.propTypes = TrackablePropTypes;

export function LogInButton({ trackableProps, ...props }) {
  return (
    <Button
      size="baby"
      color="tertiary"
      className={styles.button}
      data-click-role="log-in"
      isCTA
      {...createTrackableProps(trackableProps)}
      {...props}
    />
  );
}

LogInButton.propTypes = TrackablePropTypes;
