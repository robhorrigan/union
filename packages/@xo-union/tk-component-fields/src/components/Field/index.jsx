import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';
import { labelize, fieldId } from '../../utilities';
import { isColumn } from '@xo-union/tk-component-grid';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import { inject, observer } from 'mobx-react';

import { change, updateVisualState } from '../../actions';

const classMap = {
  neutral: FieldsCss.field,
  invalid: FieldsCss.invalidField,
  valid: FieldsCss.validField
};

const mapStateToProps = ({ membershipForm }, { name }) => {
  const fieldState = membershipForm.fields[name] || {};

  return {
    value: fieldState.value,
    state: fieldState.visualState
  };
};

const mapDispatchToProps = (dispatch, { name }) => ({
  onChange: ({ currentTarget }) => {
    const isValid = currentTarget.checkValidity();
    const { value } = currentTarget;

    dispatch(change(name, value, isValid));
  },
  onBlur: () => dispatch(updateVisualState(name)),
  inputRef: (input) => {
    const isValid = input.checkValidity();
    const { value } = input;

    dispatch(change(name, value, isValid));
  }
});

const Field = 
connect(mapStateToProps, mapDispatchToProps)(
isColumn({ className: FieldsCss['field-col'] })(
({
  name,
  validationMessage,
  inputRef,
  label = labelize(name),
  state = 'neutral',
  type = 'text',
  id = fieldId(name),
  value = '',
  ...props
}) => {
  const inputClass = classMap[state];

  if (!inputClass) {
    throw new Error(`${state} state is not supported`);
  }

  return (
    <div className={FieldsCss.container}>
      <input ref={inputRef} type={type} className={inputClass} id={id} name={name} value={value} placeholder=" " {...props} />
      <label className={FieldsCss.fieldLabel} htmlFor={id}>{label}</label>
      <div className={FieldsCss.requirements}>{validationMessage}</div>
    </div>
  );
}));

Field.propTypes = {
  /**
   * Name used for input element
   */
  name: PropTypes.string.isRequired,
  /**
   * Field column overrides. See [Column](/pattern-library/core-components/grid/components).
   */
  columns: PropTypes.shape(),
  /**
   * The input's label string. If not provided, it is assumed from the name.
   */
  label: PropTypes.string,
  /**
   * Force the visual state
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
   * The input's id. If not provided, it is assumed from the name.
   */
  id: PropTypes.string
};

export default Field;
