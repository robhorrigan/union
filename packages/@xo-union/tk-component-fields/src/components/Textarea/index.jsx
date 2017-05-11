import React, { PropTypes } from 'react';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';
import { labelize, fieldId } from '../../utilities';

export default function Textarea({
  name,
  label = labelize(name),
  id = fieldId(name),
  ...props
}) {
  return (
    <div className={FieldsCss.container}>
      <textarea className={FieldsCss.textareaWithLabel} id={id} name={name} {...props} />
      <label className={FieldsCss.textareaLabel} htmlFor={id}>{ label }</label>
    </div>
  );
}

Textarea.propTypes = {
  /**
   * Used to generate the field's name, id and label
   **/
  name: PropTypes.string.isRequired,
  /**
    * Override the default label (which is derived from the name)
    **/
  label: PropTypes.string,
  /**
    * Override the default id (which is derived from the name)
    **/
  id: PropTypes.string
};
