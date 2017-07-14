import React from 'react';
import PropTypes from 'prop-types';
import bsTables from '@xo-union/tk-css-bootstrap/lib/tables';

export default function Table({ children }) {
  return (
    <table className={[bsTables.table, bsTables.tableBordered].join(' ')}>
      {children}
    </table>
  );
}

export function TableHead({ columns }) {
  return (
    <thead>
      <TableRow columns={columns} ColumnComponent="th" />
    </thead>
  );
}

TableHead.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.string
  )
};

export function TableRow({ columns, ColumnComponent = 'td' }) {
  return (
    <tr>
      {columns.map((columnName => (
        <ColumnComponent key={columnName}>{columnName}</ColumnComponent>
      )))}
    </tr>
  );
}

TableRow.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.string
  ),
  ColumnComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.instanceOf(React.Component)
  ])
};

Table.propTypes = {
  children: PropTypes.node
};
