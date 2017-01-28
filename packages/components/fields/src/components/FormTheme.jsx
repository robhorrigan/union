import React, { PropTypes as T } from 'react';
import styles from '@union/fields-css';

/**
 * Theme provider for the form fields.
 */
export default function FormTheme({ children, name = 'gray', ...props }) {
  let className = styles[`${name}Theme`];

  if (!className) {
    throw new Error(`${name} theme is not defined`);
  }

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

FormTheme.propTypes = {
  /**
   * Name of theme
   */
  name: T.oneOf(['white', 'gray']),
  /**
   * Form elements
   */
  children: T.node
};
