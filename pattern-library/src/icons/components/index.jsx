/**
 * This package uses a hosted svg file in production but an embedded svg file for development.
 * The svg is pre-processed to add a unique "stamp" to the ids of the icons. As noted below, this is
 * necessary to allow incompatible versions of the icons library to co-exist within the same application.
 */
import React from 'react';
import styles from '@xo-union/icons/css';
/**
 * Import the stamp for the current version of icons -- This is a hash of the svg file
 * This stamp is important to avoid collisions between multiple version of the icons package being
 * bundled into the same application
 */
import stamp from '!!../loaders/icon-loader.js?onlyStamp&exportsResult!#assets/icons/union-icons.svg';

let url = '';

if (ENV === 'production') {
  /**
   * Get the hosted url for the union-icons file
   */
  url = require('!!file-loader?name=/[name]-[hash:3].[ext]&publicPath=//assets.union.theknot.com/icons&outputPath=../../../public/assets/icons!../loaders/icon-loader.js!#assets/icons/union-icons.svg');
} else {
  /**
   * Get a string of the pre-processed svg file
   */
  const svg = require('!!../loaders/icon-loader.js?exportsResult!#assets/icons/union-icons.svg');

  if (typeof document !== 'undefined') {
    /* Add svg to document for development purposes */
    document.body.innerHTML += svg;
  }
}

export default function Icon({ name, className = '', ...props }) {
  return (
    <svg className={`${styles.icon} ${className}`} {...props}>
      <use xlinkHref={`${url}#icon-${name}-${stamp}`} />
    </svg>
  );
}

