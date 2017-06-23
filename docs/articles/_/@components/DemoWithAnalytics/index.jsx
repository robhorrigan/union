import React from 'react';
import Demo from '@components/Demo';

export default function DemoWithAnalytics(props) {
  return (
    <Demo
      propOverrides={{ analyticsProps: ({ product }) => (JSON.stringify({ product })) }}
      {...props}
    />
  );
}
