import React from 'react';
import Demo from '#docs/doc-components/Demo';
import HeaderNav from './InactiveHeaderNav';

export default function HeaderNavDemo(props) {
  return (
    <Demo>
      <HeaderNav analyticsProps={{ product: 'fashion' }} {...props} />
    </Demo>
  );
}
