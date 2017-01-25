import React from 'react';
import bsTables from '@union/bootstrap/lib/tables';

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
    type,
    description
  } = propMetadata;

  const name = propMetadata.required ? `* ${propName}` : propName;
  const defaultValueString = defaultValue && defaultValue.value;
  const typeString = type && type.name;

  return (
    <TableRow columns={[ name, typeString, description, defaultValueString ]} />
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
