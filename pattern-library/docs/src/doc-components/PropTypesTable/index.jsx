import React, { PropTypes, createElement } from 'react';
import bsTables from '@xo-union/bootstrap/tables';
import { parseType } from '#docs/doc-components/utilities';

const has = Object.prototype.hasOwnProperty;

/**
 * Use this component to render a table describing a component's propTypes
 */
export default function PropTypesTable({ metadata, exclude = [] }) {
  const shouldStay = columnName => exclude.indexOf(columnName) < 0;
  const columnsNames = ['name', 'description', 'type', 'default'].filter(shouldStay);

  return (
    <table className={[bsTables.table, bsTables.tableInverse, bsTables.tableBordered].join(' ')}>
      <thead>
        <TableRow columns={columnsNames} header={true} />
      </thead>
      <PropTypesTableBody metadata={metadata} columns={columnsNames} />
    </table>
  );
}

const TypeShape = PropTypes.shape({
  name: PropTypes.string,
  value: PropTypes.any,
  computed: PropTypes.bool,
  require: PropTypes.bool
});

PropTypesTable.propTypes = {
  /**
   * props attribute from react-gen metadata
   */
  metadata: PropTypes.shape({
    type: TypeShape,
    description: PropTypes.string,
    defaultValue: PropTypes.shape({
      value: PropTypes.string
    })
  }).isRequired,
  /**
   * List of columns to exclude. Default columns are: "name", "description", "type", "default"
   */
  exclude: PropTypes.arrayOf(PropTypes.string)
}

function PropTypesTableBody({ metadata, columns }) {
  const tableBody = propTypesDictionary(metadata).map((propTypeMetadata, key) => {
    const columnValues = columns.map((columnName) => propTypeMetadata[columnName]);

    return <TableRow columns={columnValues} key={key} />
  });

  return (
    <tbody>
      {tableBody}
    </tbody>
  );
}

function TableRow({ columns = [], header = false, ...props }) {
  const columnElement = header ? 'th' : 'td';
  const createRowElement = (element, key) => createElement(columnElement, { key }, element);

  return (
    <tr>
      {columns.map(createRowElement)}
    </tr>
  );
}

function propTypesData({ data, name }) {
  const {
    defaultValue,
    description
  } = data;

  const propName = data.required ? `* ${name}` : name;
  const defaultValueString = defaultValue && defaultValue.value;

  return {
    description,
    name: propName,
    type: parseType(data.type),
    default: defaultValueString
  };
}

function propTypesDictionary(propTypesMetadata) {
  const data = [];
  for (const name in propTypesMetadata) {
    if (has.call(propTypesMetadata, name)) {
      data.push(propTypesData({ name, data: propTypesMetadata[name] }));
    }
  }

  return data;
}

