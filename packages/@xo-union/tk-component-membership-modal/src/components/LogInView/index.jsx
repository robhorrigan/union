import React, { Component } from 'react';
import style from '@xo-union/tk-component-membership-modal/lib/css';
import { Form, Field, FieldGroup } from '@xo-union/tk-component-fields';
import { Button } from '@xo-union/tk-component-buttons';
import { TheKnotLogo } from '@xo-union/tk-component-icons';
import { autobind } from 'core-decorators';
import { inject } from 'mobx-react';
import { getFormName } from '@utilities/stateManagement';

@inject('membership')
export default class LogInContainer extends Component {
  @autobind
  handleSubmit(data, evt) {
    evt.preventDefault();

    const { membership } = this.props;

    membership.logIn(data);
  }

  render() {
    const { membershipModal } = this.props;

    return (
      <LogIn
        onClickSignUp={membershipModal.changeToSignUp}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

function LogIn({ onClickSignUp, onSubmit }) {
  return (
    <div className={style['modal']}>
      <div className={style['log-in-header']}>
        Log into <TheKnotLogo />
      </div>
      <Form name={getFormName('log-in')} onSubmit={onSubmit}>
        <FieldGroup>
          <Field name="email" label="Your email address" />
        </FieldGroup>

        <FieldGroup>
          <Field name="password" type="password" />
        </FieldGroup>


        <Button block isCTA>
          Go
        </Button>
      </Form>
      <div className={style['form-sub-text']}>
        <a href="/account/forgot-password/provide-email">
          Forgot password?
        </a>
      </div>
      <div className={style['form-sub-text']}>
        Are you a vendor?  <a href="https://partners.theknot.com/?utm_source=theknot.com&utm_medium=referral&utm_campaign=log-in-modal">
          Log into your account
        </a>
      </div>

      <div className={style['footer']}>
        Not a member yet?  <a role="button" onClick={onClickSignUp}>Join now!</a>
      </div>
    </div>
  )
}
