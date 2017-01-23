import React from 'react';
import SideNavLinks from 'components/SideNav/links';

/* Style dependencies */
import bsUtils from '@union/bootstrap/lib/utilities';

export default function SideNav({ className, ...props }) {
  const classes = [ bsUtils.bgFaded, className ].join(' ');

  return (
    <nav className={classes} {...props}>
      <SideNavLinks />
    </nav>
  )
}

