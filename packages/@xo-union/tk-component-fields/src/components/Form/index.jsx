import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormTheme from '../FormTheme';
import { autobind } from 'core-decorators';

/**
 * Use this component as the container to all forms.
 */
export default class Form extends Component {
  static propTypes = {
    /**
     * Called when user submits. **Signature:** (data, event) => void
     */
    onSubmit: PropTypes.func
  }

  @autobind
  handleSubmit(evt) {
    if (!this.props.isValid) {
      evt.preventDefault();
      this.props.handleInvalidSubmit();

      return;
    }

    this.props.onSubmit(this.formData.fieldValues, evt);
  }

  render() {
    const { onSubmit, theme, children, ...props } = this.props;

    return (
      <form noValidate onSubmit={this.handleSubmit} {...props}>
        <FormTheme name={theme}>
          {children}
        </FormTheme>
      </form>
    );
  }
}
