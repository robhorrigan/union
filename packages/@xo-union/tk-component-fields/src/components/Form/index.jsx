import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormTheme from '../FormTheme';
import Field from '../Field';
import { autobind } from 'core-decorators';
import FieldRegistry from './FieldRegistry';

export default class FormContainer extends Component {
  fieldRegistry = new FieldRegistry();

  static childContextTypes = {
    fieldRegistry: PropTypes.instanceOf(FieldRegistry)
  }

  getChildContext() {
    return {
      fieldRegistry: this.fieldRegistry
    };
  }

  @autobind
  handleSubmit(evt) {
    if (!evt.currentTarget.checkValidity()) {
      evt.preventDefault();

      this.fieldRegistry.validateFields();

      return;
    }

    this.props.onSubmit(this.fieldRegistry.getFieldValues(), evt);
  }

  render() {
    const { onSubmit, ...props } = this.props;

    return <Form onSubmit={this.handleSubmit} {...props} />
  }
}

function Form({ children, theme, ...props }) {
  return (
    <form noValidate {...props}>
      <FormTheme name={theme}>
        {children}
      </FormTheme>
    </form>
  );
}
