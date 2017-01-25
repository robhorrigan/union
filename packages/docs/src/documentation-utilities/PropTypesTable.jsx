import React from 'react';
import bsTables from '@union/bootstrap/lib/tables';

function parseType({ type = {} }) {
  if (type.value) {
    return `${type.name}(${type.value.name})`;
  }

  return type.name;
}

function TableRow({ columns = [], header = false, ...props }) {
  const columnElement = header ? 'th' : 'td';

  return (
    <tr>
      {
        columns.map((element, key) => {
          return React.createElement(columnElement, { key }, element);
        })
      }
    </tr>
  );
}

function PropTypesRow({ propMetadata, propName }) {
  const {
    defaultValue,
    description
  } = propMetadata;

  const name = propMetadata.required ? `* ${propName}` : propName;
  const defaultValueString = defaultValue && defaultValue.value;

  return (
    <TableRow columns={[
      name,
      parseType(propMetadata),
      description,
      defaultValueString
    ]} />
  );
}

export default function PropTypesTable({ metadata }) {
  const tableBody = [];

  for (const prop in metadata) {
    if (Object.prototype.hasOwnProperty.call(metadata, prop)) {
      tableBody.push(<PropTypesRow key={prop} propName={prop} propMetadata={metadata[prop]} />);
    }
  }

  return (
    <table className={[bsTables.table, bsTables.tableInverse, bsTables.tableBordered].join(' ')}>
      <thead>
        <TableRow columns={['name', 'type', 'description', 'default']} header={true} />
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </table>
  );
}
