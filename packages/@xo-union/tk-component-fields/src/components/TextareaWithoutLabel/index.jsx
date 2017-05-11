import React from 'react';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';

export default function TextareaWithoutLabel({ ...props }) {
  return (
    <textarea className={FieldsCss.textareaWithoutLabel} {...props} />
  );
}
