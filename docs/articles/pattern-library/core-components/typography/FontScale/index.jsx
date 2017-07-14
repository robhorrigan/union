import React from 'react';
import type from '@xo-union/tk-css-typography';
import Table, { TableHead, TableRow } from '@components/Table';
import remToPixels from '@helpers/remToPixels';
import style from './style';

function fontScales() {
  const scales = [];

  for (let i = 10; i >= -5; i -= 1) {
    let scaleName;
    if (i > 0) {
      scaleName = `up-${i}`;
    } else if (i < 0) {
      scaleName = `down-${Math.abs(i)}`;
    } else {
      scaleName = 'base';
    }

    scales.push(scaleName);
  }

  return scales;
}

export default function FontScale() {
  return (
    <div className={style['scale-example']}>
      {
        fontScales().map(suffix => (
          <div key={suffix}>
            <div className={type[`font-${suffix}`]}>Pack my box with five dozen liquor jugs.</div>
            <div className={style['scale-name']}>{suffix}</div>
          </div>
        ))
      }
    </div>
  );
}

export function FontScaleTable() {
  return (
    <Table>
      <TableHead columns={['Scale name', 'Size (rem)', 'Size (px)']} />
      <tbody>
        {
          fontScales().map(scaleName => (
            <TableRow
              key={scaleName}
              columns={[
                scaleName,
                type[`var-fs-${scaleName}`],
                remToPixels(type[`var-fs-${scaleName}`])
              ]}
            />
          ))
        }
      </tbody>
    </Table>
  );
}
