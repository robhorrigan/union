import React from 'react';
import colors from '@xo-union/tk-css-colors';
import uniqueColorNames from './helpers/uniqueColors';

export default function Palette() {
  return (
    <div>
      {uniqueColorNames().map(color =>
        <figure key={color}>
          <div style={{ backgroundColor: colors[color], height: '1rem', width: '10rem' }} />
          <figcaption>{color}</figcaption>
        </figure>
      )}
    </div>
  );
}
