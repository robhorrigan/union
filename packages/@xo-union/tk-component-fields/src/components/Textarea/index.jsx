import React from 'react';
import PropTypes from 'prop-types';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';
import { labelize, fieldId } from '../../utilities';
import { isColumn } from '@xo-union/tk-component-grid';
import TextareaWithoutLabel from '../TextareaWithoutLabel';


const Textarea = isColumn({ className: FieldsCss['field-col'] })
(function Textarea({
  name,
  label = labelize(name),
  id = fieldId(name),
  ...props
}) {
  if (!label) {
    return <TextareaWithoutLabel id={id} {...props} />
  }

  return (
    <div className={FieldsCss.container}>
      <textarea className={FieldsCss.textareaWithLabel} id={id} name={name} {...props} />
      <label className={FieldsCss.textareaLabel} htmlFor={id}>{ label }</label>
    </div>
  );
});

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

export default Textarea;
