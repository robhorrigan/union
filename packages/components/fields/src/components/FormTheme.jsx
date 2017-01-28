import React, { PropTypes as T } from 'react';
import styles from '@union/fields-css';

/**
 * Theme provider for the form fields.
 */
export default function FormTheme({ className, children, name = 'gray', ...props }) {
  let themeClass = styles[`${name}Theme`];

  if (!themeClass) {
    throw new Error(`${name} theme is not defined`);
  }

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
