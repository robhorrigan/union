import React from 'react';
import PropTypes from 'prop-types';
import bsGrid from '@xo-union/tk-css-bootstrap/lib/grid';
import spacing from '@xo-union/tk-css-spacing';
import style from '@xo-union/tk-component-fields/lib/css';

/**
 * Use this component to visually separate groups of fields
 */
export default function FieldGroup({ children, ...props }) {
  return (
    <div className={spacing.mb3} {...props}>
      <div className={style['field-group']}>
        {children}
      </div>
    </div>
  );
}

FieldGroup.propTypes = {
  /**
   * The first level children should more than likely be divs using bootstrap's grid classes.
   * The second level children should be fields.
   */
  children: PropTypes.node.isRequired
};
