import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';
import { labelize, fieldId } from '../../utilities';
import { Column } from '@xo-union/tk-component-grid';
import { autobind } from 'core-decorators';
import { inject, observer } from 'mobx-react';

const classMap = {
  neutral: FieldsCss.field,
  invalid: FieldsCss.invalidField,
  valid: FieldsCss.validField
};

@inject('formData')
@observer
export default class FieldContainer extends Component {
  constructor (props) {
    super(props);

    const { formData, name } = this.props;
    formData.add(name);
  }

  getValidationMessage() {
    return this.props.validationMessage;
  }

  render() {
    const { formData, ...props } = this.props;

    return (
      <Field
        state={formData.getVisualState(props.name)}
        inputRef={formData.handleRef}
        onBlur={formData.handleInputBlur}
        value={formData.getValue(props.name)}
        onChange={formData.handleInputChange}
        validationMessage={this.getValidationMessage()}
        {...props}
      />
    );
  }
}

function Field({
  name,
  validationMessage,
  inputRef,
  label = labelize(name),
  state = 'neutral',
  type = 'text',
  id = fieldId(name),
  columns = { xs: 12 },
  ...props
}) {
  const inputClass = classMap[state];

  if (!inputClass) {
    throw new Error(`${state} state is not supported`);
  }

  return (
    <Column {...columns}>
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
