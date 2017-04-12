import React from 'react';
import { Demo } from '#docs/doc-components';
import Icon from '@xo-union/icons';
import icons from '!!xml-loader!#assets/icons/union-icons.svg';

export default function IconsDemo() {
  const demos = icons.svg.defs[0].symbol.map(({ $: { id } }) =>
    <Demo>
      <Icon name={id.replace(/^icon-/, '')} />
    </Demo>
  );

  return (
    <div>
      {demos}
    </div>
  );
}
