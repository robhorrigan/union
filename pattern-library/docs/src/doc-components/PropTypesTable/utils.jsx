import React, { PropTypes, createElement } from 'react';
import { parseType } from '#docs/doc-components/utilities';

const TypeShape = PropTypes.shape({
  name: PropTypes.string,
  value: PropTypes.any,
  required: PropTypes.bool
});

export const MetadataShape = PropTypes.shape({
  type: TypeShape,
  description: PropTypes.string,
  defaultValue: PropTypes.shape({
    value: PropTypes.string
  })
});

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
  return Object.keys(propTypesMetadata).map(name =>
    propTypesData({ name, data: propTypesMetadata[name] })
  );
}

export function TableBody({ metadata, columns }) {
  const tableBody = propTypesDictionary(metadata).map((propTypeMetadata) => {
    const columnValues = columns.map(columnName => propTypeMetadata[columnName]);

    return <TableRow columns={columnValues} key={propTypeMetadata.name} />;
  });

  return (
    <tbody>
      {tableBody}
    </tbody>
  );
}

TableBody.propTypes = {
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
  columns: PropTypes.arrayOf(PropTypes.string)
};

export function TableRow({ columns = [], header = false }) {
  const columnElement = header ? 'th' : 'td';
  const createRowElement = (element, key) => createElement(columnElement, { key }, element);

  return (
    <tr>
      {columns.map(createRowElement)}
    </tr>
  );
}

TableRow.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  header: PropTypes.bool
};
