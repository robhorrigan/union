import React from 'react';
import linkedField from '../Form/linkedField';

/**
 * The HiddenField component is a simple wrapper around an `input[type="hidden"]` that integrates with the state of the form. It is helpful to use this component when aiming for a consistent flow of data (having one place where all submitted data lives) and when building forms that work without javascript.
 */
export default linkedField(function HiddenField({ formData, ...props }) {
  return (
    <input type="hidden" {...props}/>
  );
})
