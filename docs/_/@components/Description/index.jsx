import React from 'react';
import compile from '#docs/markdown_compiler';

export default function Description({ metadata }) {
  return (
    <p>
      {compile(metadata.description).tree}
    </p>
  );
}
