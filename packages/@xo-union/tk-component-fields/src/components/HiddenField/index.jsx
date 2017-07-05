import React from 'react';
import linkedField from '../Form/linkedField';

export default linkedField(function HiddenField({ formData, ...props }) {
  return (
    <input type="hidden" {...props}/>
  );
})
