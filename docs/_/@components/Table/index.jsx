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

Table.propTypes = {
  children: PropTypes.node
};
