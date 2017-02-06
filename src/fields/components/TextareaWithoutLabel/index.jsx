import React, { PropTypes } from 'react';
import FieldsCss from '@union/fields/css';

export default function TextareaWithoutLabel({ ...props }) {
  return (
    <textarea className={FieldsCss.textareaWithoutLabel} {...props} />
  )
}
