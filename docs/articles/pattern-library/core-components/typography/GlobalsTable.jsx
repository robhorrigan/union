import React from 'react';
import type from '@xo-union/tk-css-typography';
import Table, { TableHead, TableRow } from '@components/Table';
import remToPixels from '@helpers/remToPixels';

function remToEm(remString) {
  return remString.replace('rem', 'em');
}

export default function GlobalsTable() {
  const headerSizeMap = [
    [1, 7],
    [2, 6],
    [3, 5],
    [4, 4],
    [5, 3],
    [6, 2]
  ];

  return (
    <Table>
      <TableHead columns={['Element', 'Scale name', 'Size (rem)', 'Size (px)']} />
      <tbody>
        {
          headerSizeMap.map(([headerSize, scaleSize]) => (
            <TableRow
              key={scaleSize}
              columns={[
                `h${headerSize}`,
                `up-${scaleSize}`,
                remToEm(type[`var-fs-up-${scaleSize}`]),
                remToPixels(type[`var-fs-up-${scaleSize}`])
              ]}
            />
          ))
        }
        <TableRow
          columns={[
            'p',
            'up-1',
            remToEm(type['var-fs-up-1']),
            remToPixels(type['var-fs-up-1'])
          ]}
        />
      </tbody>
    </Table>
  );
}
