import React from 'react';
import PropTypes from 'prop-types';
import bsGrid from '@xo-union/tk-css-grid';
import spacing from '@xo-union/tk-css-spacing';

/**
 * Use this component to visually separate groups of fields
 */
export default function FieldGroup({ children, ...props }) {
  return (
    <div className={spacing['mb-base']} {...props}>
      <div className={bsGrid.row}>
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
