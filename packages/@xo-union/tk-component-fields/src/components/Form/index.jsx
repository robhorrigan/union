import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormTheme from '../FormTheme';
import Field from '../Field';
import { autobind } from 'core-decorators';
import FormData from './FormData';
import { Provider } from 'mobx-react';
import { connect } from 'react-redux';
import { updateVisualStateOfAll } from '../../actions';

function mapStateToProps(state) {
  return {
    isValid: state.membershipForm.isValid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInvalidSubmit: () => {
      dispatch(updateVisualStateOfAll());
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
