import React from 'react';
import PropTypes from 'prop-types';
import bsGrid from '@xo-union/tk-css-bootstrap/lib/grid';

function getGridClasses(breakpoints) {
  return Object.keys(breakpoints).reduce((classes, key) => {
    if (!breakpoints[key]) {
      return classes;
    }
    const sizeSuffix = breakpoints[key] === true ? '' : `-${breakpoints[key]}`;
    const breakpointSuffix = key === 'xs' ? `` : `-${key}`;

    return `${classes} ${bsGrid[`col${breakpointSuffix}${sizeSuffix}`]}`;
  }, '');
}

export function Column({ xs, sm, md, lg, xl, children }) {
  return (
    <div className={getGridClasses({ xs, sm, md, lg, xl })}>
      {children}
    </div>
  );
}

