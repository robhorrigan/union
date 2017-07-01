import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldsCss from '@xo-union/tk-component-fields/lib/css';
import { labelize, fieldId } from '../../utilities';
import { Column } from '@xo-union/tk-component-grid';
import { autobind } from 'core-decorators';

const classMap = {
  neutral: FieldsCss.field,
  invalid: FieldsCss.invalidField,
  valid: FieldsCss.validField
};

export default class FieldContainer extends Component {
  static contextTypes = {
    fieldRegistry: PropTypes.shape()
  }

  state = {
    validityState: 'neutral',
    value: ''
  }

  componentDidMount() {
    const { fieldRegistry } = this.context;

    if (fieldRegistry) {
      const { name } = this.props;

      fieldRegistry.add(name, {
        validate: this.validate,
        getValue: this.getValue
      });
    }
  }

  componentDidUnMount() {
    const { fieldRegistry } = this.context;

    if (fieldRegistry) {
      fieldRegistry.delete(name);
    }
  }

  @autobind
  cacheRef(input) {
    this.input = input;
  }

  @autobind
  getValue() {
    return this.state.value;
  }

  @autobind
  validate() {
    if (!this.input) {
      return;
    }

    if (this.input.checkValidity()) {
      this.setState({ validityState: 'neutral' });
    } else {
      this.setState({ validityState: 'invalid' });
    }
  }

  @autobind
  handleChange({ currentTarget }) {
    this.setState({ value: currentTarget.value });
  }

  getValidationMessage() {
    return this.props.validationMessage || (this.input && this.input.validationMessage);
  }

  render() {
    return (
      <Field
        state={this.state.validityState}
        onBlur={this.validate}
        inputRef={this.cacheRef}
        value={this.state.value}
        onChange={this.handleChange}
        validationMessage={this.getValidationMessage()}
        {...this.props}
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
