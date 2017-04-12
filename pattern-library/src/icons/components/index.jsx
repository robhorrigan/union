/* eslint-disable import/no-webpack-loader-syntax */
/**
 * This package uses a hosted svg file (as in http://url-to-cdn-hosted-file) in production but an
 * embedded svg file for development (as in an <svg> tag on the DOM) to avoid depending on a network.
 * The svg is pre-processed to add a unique "stamp" to the ids of the icons. As noted below, this is
 * necessary to allow incompatible versions of the icons library to co-exist within the same application.
 */
import React, { PropTypes } from 'react';
import styles from '@xo-union/icons/css';
/**
 * Import the stamp for the current version of icons -- This is a hash of the svg file
 * This stamp is important to avoid collisions between multiple version of the icons package being
 * bundled into the same application
 */
// eslint-disable-next-line max-len
import stamp from '!!../loaders/icon-loader.js?onlyStamp&exportsResult!#assets/icons/union-icons.svg';

let url = '';

export default function Icon({ name, className = '', ...props }) {
  return (
    <svg className={`${styles.icon} ${className}`} {...props}>
      <use xlinkHref={`${url}#icon-${name}-${stamp}`} />
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};


if (ENV === 'production') {
  /**
   * Get the hosted url for the union-icons file
   *
   * @example 'https://assets.union.theknot.com/icons/union-icons-[hash].svg
   */
  // eslint-disable-next-line max-len, global-require
  url = require('!!file-loader?name=/[name]-[hash:3].[ext]&publicPath=//assets.union.theknot.com/icons&outputPath=../../../public/assets/icons!../loaders/icon-loader.js!#assets/icons/union-icons.svg');
} else {
  /**
   * Get a string of the pre-processed svg file
   *
   * @example <svg></svg>
   */
  // eslint-disable-next-line global-require
  const svg = require('!!../loaders/icon-loader.js?exportsResult!#assets/icons/union-icons.svg');

  if (typeof document !== 'undefined') {
    /* Add svg to document for development purposes */
    document.body.innerHTML += svg;
  }
}
