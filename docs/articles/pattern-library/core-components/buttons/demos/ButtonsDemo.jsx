import React from 'react';
import bsGrid from '@xo-union/tk-css-bootstrap/lib/grid';
import { Link, Button } from '@xo-union/tk-component-buttons';
import { Demo } from '#docs/doc-components';

export default function ButtonsDemo(props) {
  return (
    <div className={bsGrid.row}>
      <div className={bsGrid.col6}>
        <Demo>
          <Button {...props} />
        </Demo>
      </div>

      <div className={bsGrid.col6}>
        <Demo>
          <Link href="#" {...props} />
        </Demo>
      </div>
    </div>
  );
}
