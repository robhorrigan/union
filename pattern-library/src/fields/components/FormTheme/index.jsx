import React, { PropTypes as T } from 'react';
import FieldsCss from '@xo-union/fields/css';

/**
 * Theme provider for the form fields.
 */
export default function FormTheme({ name = 'gray', className, children, ...props }) {
  const themeClass = FieldsCss[`${name}Theme`];

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
  children: T.node.isRequired,
  /**
   * Class to append to class list
   */
  className: T.string
};

FormTheme.defaultProps = {
  className: ''
};
