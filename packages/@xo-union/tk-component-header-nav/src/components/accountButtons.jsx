import React from 'react';
import { Button } from '@xo-union/tk-component-buttons';
import styles from '@xo-union/tk-component-header-nav/lib/css';

export function SignUpButton(props) {
  return (
    <Button
      size="baby"
      className={styles.button}
      isCTA
      data-click-role="sign-up"
      {...props}
    >
      Sign up
    </Button>
  );
}

export function LogInButton(props) {
  return (
    <Button
      size="baby"
      color="tertiary"
      className={styles.button}
      data-click-role="log-in"
      isCTA
      {...props}
    />
  );
}
