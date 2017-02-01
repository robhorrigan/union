import React, { PropTypes as T } from 'react';
import styles from '@union/fields-css';

/**
 * Theme provider for the form fields.
 */
export default function FormTheme({ name = 'gray', className, children, ...props }) {
  let themeClass = styles[`${name}Theme`];

  return (
    <div className={[themeClass, className].join(' ')} {...props}>
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
