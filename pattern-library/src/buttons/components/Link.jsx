import React from 'react';
import { processProps } from '../utilities';

export default function Link(props) {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...processProps(props)} />;
}

