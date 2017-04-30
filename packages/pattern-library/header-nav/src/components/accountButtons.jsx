import React from 'react';
import { Button } from '@xo-union/buttons';

export function SignUpButton(props) {
  return (
    <Button size="baby" isCTA data-click-role="sign-up" {...props}>
      SIGN UP
    </Button>
  );
}

export function LogInButton(props) {
  return (
    <Button size="baby" color="tertiary" data-click-role="log-in" isCTA {...props}>
      LOG IN
    </Button>
  );
}
