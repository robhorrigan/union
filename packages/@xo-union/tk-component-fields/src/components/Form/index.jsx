import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormTheme from '../FormTheme';
import Field from '../Field';
import { autobind } from 'core-decorators';
import FormData from './FormData';
import { Provider } from 'mobx-react';

/**
 * Use this component as the container to all forms.
 */
export default class FormContainer extends Component {
  static propTypes = {
    /**
     * Called when user submits. **Signature:** (data, event) => void
     */
    onSubmit: PropTypes.func
  }

  formData = new FormData();

  @autobind
  handleSubmit(evt) {

    if (!this.formData.isValid) {
      evt.preventDefault();

      this.formData.updateVisualStateOfInvalidFields();

      return;
    }

    this.props.onSubmit(this.formData.fieldValues, evt);
  }

  render() {
    const { onSubmit, ...props } = this.props;

    return (
      <Provider formData={this.formData}>
        <Form onSubmit={this.handleSubmit} {...props} />
      </Provider>
    );
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
