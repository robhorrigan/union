import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';
import { labelize, fieldId } from '../../utilities';
import { Column } from '@xo-union/tk-component-grid';
import { autobind } from 'core-decorators';
import { inject, observer } from 'mobx-react';
import linkedField from '../Form/linkedField';

const classMap = {
  neutral: FieldsCss.field,
  invalid: FieldsCss.invalidField,
  valid: FieldsCss.validField
};

const FieldContainer = linkedField(function FieldContainer({ formData, ...props }) {
  return (
    <Field
      state={formData.getVisualState(props.name)}
      inputRef={formData.handleRef}
      onBlur={formData.handleInputBlur}
      value={formData.getValue(props.name)}
      onChange={formData.handleInputChange}
      {...props}
    />
  );
});

export default FieldContainer;

function Field({
  name,
  validationMessage,
  inputRef,
  label = labelize(name),
  state = 'neutral',
  type = 'text',
  id = fieldId(name),
  columns = { xs: true },
  ...props
}) {
  const inputClass = classMap[state];

  if (!inputClass) {
    throw new Error(`${state} state is not supported`);
  }

  return (
    <Column className={FieldsCss['field-col']} {...columns}>
      <div className={FieldsCss.container}>
        <input ref={inputRef} type={type} className={inputClass} id={id} name={name} {...props} placeholder=" " />
        <label className={FieldsCss.fieldLabel} htmlFor={id}>{label}</label>
        <div className={FieldsCss.requirements}>{validationMessage}</div>
      </div>
    </Column>
  );
}

Field.propTypes = {
  /**
   * Name used for input element
   */
  name: PropTypes.string.isRequired,
  /**
   * The input's label string
   */
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
   * The input type
   */
  type: PropTypes.string,
  /**
   * Override the id which is derived from the name
   */
  id: PropTypes.string
};
