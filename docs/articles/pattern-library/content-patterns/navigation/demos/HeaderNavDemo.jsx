import React from 'react';
import HeaderNav from './InactiveHeaderNav';
import Demo from '#docs/doc-components/Demo';

export default function HeaderNavDemo(props) {
  return (
    <Demo>
      <HeaderNav analyticsProps={{product: 'fashion'}} {...props} />
    </Demo>
  );
}