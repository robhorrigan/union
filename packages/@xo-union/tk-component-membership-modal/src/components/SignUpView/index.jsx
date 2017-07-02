import React, { Component } from 'react';
import style from '@xo-union/tk-component-membership-modal/lib/css';
import {
  Form,
  Field,
  FieldGroup
} from '@xo-union/tk-component-fields';
import { Button } from '@xo-union/tk-component-buttons';
import { NewWindowAnchor } from '@xo-union/component-standard-elements/lib/anchor';
import { autobind } from 'core-decorators';
import { connect } from '@xo-union/tk-lib-core-state';


@connect('membership')
export default class SignUpView extends Component {
  @autobind
  handleSubmit(data, evt) {
    evt.preventDefault();
  }

  render() {
    const { onClickLogIn, onSubmit, membership } = this.props;

    return (
      <div className={style['modal']}>
        <div className={style['header']}>
          Your personal wedding plan starts now
        </div>
        <p className={style['sub-header']}>
          {"Advice, tools, and the best local vendors to have a wedding that's uniquely you (cue the confetti!)"}
        </p>
        <Form onSubmit={this.handleSubmit}>
          <FieldGroup>
            <Field
              name="email"

              /* Validation props */
              validationMessage="Must be a valid email"
              type="email"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Field
              name="password"
              type="password"
              label="Password (6 or more characters)"

              /* Validation props */
              validationMessage="Must be at least 6 characters long"
              minLength="6"
              required
            />
          </FieldGroup>


          <Button block isCTA>
            Sign Up
          </Button>
        </Form>
        <div className={style['form-sub-text']}>
          <small>
            By signing up, you agree to our <NewWindowAnchor href="/terms-and-conditions">Terms</NewWindowAnchor> and <NewWindowAnchor href="/privacy-policy">Privacy Policy</NewWindowAnchor>.
          </small>
        </div>

        <div className={style['footer']}>
          Already a member of The Knot?  <a role="button" onClick={onClickLogIn}>Log In</a>
        </div>
      </div>
    );
  }
}

