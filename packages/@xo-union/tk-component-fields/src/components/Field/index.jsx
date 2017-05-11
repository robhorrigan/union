import React, { PropTypes as T } from 'react';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';
import { labelize, fieldId } from '../../utilities';

const classMap = {
  neutral: FieldsCss.field,
  invalid: FieldsCss.invalidField,
  valid: FieldsCss.validField
};

export default function Field({
  name,
  validationMessage,
  label = labelize(name),
  state = 'neutral',
  type = 'text',
  id = fieldId(name),
  ...props
}) {
  const inputClass = classMap[state];

  if (!inputClass) {
    throw new Error(`${state} state is not supported`);
  }

  return (
    <div className={FieldsCss.container}>
      <input type={type} className={inputClass} id={id} name={name} {...props} placeholder=" " />
      <label className={FieldsCss.fieldLabel} htmlFor={id}>{label}</label>
      <div className={FieldsCss.requirements}>{validationMessage}</div>
    </div>
  );
}

Field.propTypes = {
  /**
   * Name used for input element
   */
  name: T.string.isRequired,
  /**
   * The input's label string
   */
  label: T.string,
  /**
   * Render state
   */
  state: T.oneOf(['neutral', 'valid', 'invalid']),
  /**
   * Validation message used when field is invalid
   */
  validationMessage: T.string,
  /**
   * The input type
   */
  type: T.string,
  /**
   * Override the id which is derived from the name
   */
  id: T.string
};
