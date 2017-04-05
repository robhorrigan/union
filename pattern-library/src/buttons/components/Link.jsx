import React from 'react';
import { processProps } from '../utilities';

export default function Link(props) {
  return <a {...processProps(props)} />;
}

