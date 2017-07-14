import React from 'react';
import PropTypes from 'prop-types';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';
import { fieldId } from '../../utilities';

const classMap = {
  neutral: FieldsCss.textarea,
  invalid: FieldsCss.invalidTextarea,
  valid: FieldsCss.validTextarea
};

export default function Textarea({
  name,
  label,
  state = 'neutral',
  validationMessage,
  id = fieldId(name),
  ...props
}) {
  const inputClass = classMap[state];

  if (!inputClass) {
    throw new Error(`${state} state is not supported`);
  }

  return (
    <div className={FieldsCss.container}>
      { label && <label className={FieldsCss.textareaLabel} htmlFor={id}>{ label }</label> }
      <textarea className={inputClass} id={id} name={name} {...props} />
      <div className={FieldsCss.textareaRequirements}>{validationMessage}</div>
    </div>
  );
}

Textarea.propTypes = {
  /**
   * Used to generate the field's name, id and label
   **/
  name: PropTypes.string.isRequired,
  /**
    * Text to display as label
    **/
  label: PropTypes.string,
  /**
   * Render state
   */
  state: PropTypes.oneOf(['neutral', 'valid', 'invalid']),
  /**
   * Validation message used when field is invalid
   */
  validationMessage: PropTypes.string,
  /**
    * Override the default id (which is derived from the name)
    **/
  id: PropTypes.string
};
