import React from 'react';
import DemoWithAnalytics from '@components/DemoWithAnalytics';
import HeaderNav from '@xo-union/tk-component-header-nav';
import analyticsProps from '@stubs/analyticsProps';

export default function HeaderNavDemo(props) {
  return (
    <DemoWithAnalytics>
      <HeaderNav analyticsProps={analyticsProps} {...props} />
    </DemoWithAnalytics>
  );
}
