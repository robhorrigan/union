import React, { PropTypes } from 'react';
import bsTables from '@xo-union/tk-css-bootstrap/lib/tables';
import { TableBody, TableRow, MetadataShape } from './utils';

/**
 * Use this component to render a table describing a component's propTypes
 */
export default function PropTypesTable({ metadata, exclude = [] }) {
  const shouldStay = columnName => exclude.indexOf(columnName) < 0;
  const columnsNames = ['name', 'description', 'type', 'default'].filter(shouldStay);

  return (
    <table className={[bsTables.table, bsTables.tableBordered].join(' ')}>
      <thead>
        <TableRow columns={columnsNames} header />
      </thead>
      <TableBody metadata={metadata} columns={columnsNames} />
    </table>
  );
}

PropTypesTable.propTypes = {
  /**
   * props attribute from react-gen metadata
   */
  metadata: MetadataShape,
  /**
   * List of columns to exclude. Default columns are: "name", "description", "type", "default"
   */
  exclude: PropTypes.arrayOf(PropTypes.string)
};

