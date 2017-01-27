import React, { PropTypes as T } from 'react';
import styles from '@union/fields-css';

export default function FormTheme({ children, name = 'gray' }) {
  let className = styles[`${name}Theme`];
  
  if (!className) {
    throw new Error(`${name} theme is not defined`);
  }
  
  return (
    <div className={className}>
      {children}
    </div>
  );
}

FormTheme.propTypes = {
  /**
   * Name of theme
   */
  name: T.string.isRequired,
  /**
   * Form elements
   */
  children: T.arrayOf(T.node)
};
