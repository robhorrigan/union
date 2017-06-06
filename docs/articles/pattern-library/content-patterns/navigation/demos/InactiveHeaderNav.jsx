import React from 'react';
import ActualHeaderNav from '@xo-union/tk-component-header-nav';

// Name HeaderNav to preserve display name -- This is necessary for demos
export default function HeaderNav({ analyticsProps, ...props}) {
  return (
    <ActualHeaderNav
      analyticsProps={{ followStrategy: false, analytics: { track: ::console.log }, ...analyticsProps }}
      {...props}
    />
  );
}
