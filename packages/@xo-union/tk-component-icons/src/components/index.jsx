/* eslint-disable import/no-webpack-loader-syntax */
/**
 * This package uses a hosted svg file (as in http://url-to-cdn-hosted-file) in production but an
 * embedded svg file for development (as in an <svg> tag on the DOM) to avoid depending on a network.
 * The svg is pre-processed to add a unique "hash" to the ids of the icons. As noted below, this is
 * necessary to allow incompatible versions of the icons library to co-exist within the same application.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { init } from '@xo-union/tk-component-icons/lib/setup';
import style from '@xo-union/tk-component-icons/lib/css';
import { hash } from '@xo-union/tk-component-icons/lib/data';

/**
 * Initialize icons -- This will be no-op if this version of the icons
 * is already initiazed
 */
init();

export default function Icon({ name, className = '', ...props }) {
  const iconSpecificClass = style[`icon-${name}`] || '';
  return (
    <svg className={`${style.icon} ${className} ${iconSpecificClass}`} {...props}>
      <use xlinkHref={`#icon-${name}-${hash}`} />
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export function IconButton({ name, isCTA, className = '', ...props }) {
  const additionalProps = {};

  return (
    <button
      className={`${style['icon-with-button']} ${className}`}
      role="button"
      {...props}
    >
      <Icon name={name} />
    </button>
  )
}
