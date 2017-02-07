import React from 'react';
import SideNavLinks from '#docs/components/SideNav/links';

/* Style dependencies */
import bsUtils from '@xo-union/bootstrap/utilities';

export default function SideNav({ className, ...props }) {
  const classes = [ bsUtils.bgFaded, className ].join(' ');

  return (
    <nav className={classes} {...props}>
      <SideNavLinks />
    </nav>
  )
}

