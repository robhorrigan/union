import React from 'react';
import FieldsCss from '@xo-union/fields/css';

export default function TextareaWithoutLabel({ ...props }) {
  return (
    <textarea className={FieldsCss.textareaWithoutLabel} {...props} />
  );
}
