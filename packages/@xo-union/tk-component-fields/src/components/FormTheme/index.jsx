import React from 'react';
import PropTypes from 'prop-types';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';

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
  name: PropTypes.oneOf(['white', 'gray']),
  /**
   * Form elements
   */
  children: PropTypes.node.isRequired,
  /**
   * Class to append to class list
   */
  className: PropTypes.string
};

FormTheme.defaultProps = {
  className: ''
};
