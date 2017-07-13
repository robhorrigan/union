import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';
import { labelize, fieldId } from '../../utilities';
import { isColumn } from '@xo-union/tk-component-grid';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import {
  change,
  updateVisualState,
  initializeField
} from '@actions/fields';
import { getFormName } from '@utilities/stateManagement';
import { getErrorMessages } from '@models/field';

const classMap = {
  neutral: FieldsCss.field,
  invalid: FieldsCss.invalidField,
  valid: FieldsCss.validField
};

function mapStateToProps(state, { ownedBy, name }) {
  const fieldState = state[getFormName(ownedBy)].fields[name] || {
    ui: {},
    model: {}
  };

  return {
    value: fieldState.model.value,
    state: fieldState.ui.visualState,
    validationMessage: fieldState.ui.currentErrorMessage
  };
}

function mapDispatchToProps(dispatch, {
  value,
  ownedBy: formName,
  name: fieldName,
  onValidState = 'valid',
  validates = [],
  errors = []
}) {
  return {
    initializeState() {
      dispatch(initializeField({
        fieldName,
        onValidVisualState: onValidState,
        value,
        formName,
        enabledValidators: validates
      }));
    },
    onChange({ currentTarget }) {
      const { value } = currentTarget;

      dispatch(change({
        fieldName,
        value,
        formName
      }));
    },
    onBlur() {
      dispatch(updateVisualState({ fieldName, formName }));
    }
  };
}

@connect(mapStateToProps, mapDispatchToProps)
@isColumn({ className: FieldsCss['field-col'] })
export default class Field extends Component {
  static propTypes = {
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
  }

  constructor(props) {
    super(props);

    this.props.initializeState();
  }

  render() {
    const {
      name,
      validationMessage,
      inputRef,
      label = labelize(name),
      state = 'neutral',
      type = 'text',
      id = fieldId(name),
      value = '',
      ...props
    } = this.props

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
  }
}
