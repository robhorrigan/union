import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormTheme from '../FormTheme';
import Field from '../Field';
import { autobind } from 'core-decorators';

import { connect } from 'react-redux';
import { updateVisualStateOfAll } from '@actions/fields';
import { isValid } from '@models/form';
import { getFormName } from '@utilities/stateManagement';

function mapStateToProps(state, { name }) {
  return {
    isValid: state[getFormName(name)]::isValid()
  };
}

function mapDispatchToProps(dispatch, { name: formName }) {
  return {
    handleInvalidSubmit: () => {
      dispatch(updateVisualStateOfAll({ formName }));
    }
  };
}
/**
 * Use this component as the container to all forms.
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class FormContainer extends Component {
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
