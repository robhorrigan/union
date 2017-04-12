import React from 'react';
import styles from '@xo-union/icons/css';
import stamp from '!!../loaders/icon-loader.js?onlyStamp&exportsResult!#assets/icons/union-icons.svg';

let url = '';

if (ENV === 'production') {
  url = require('!!file-loader?name=/[name]-[hash:3].[ext]&publicPath=//assets.union.theknot.com/icons&outputPath=../../../public/assets/icons!../loaders/icon-loader.js!#assets/icons/union-icons.svg');
} else {
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

