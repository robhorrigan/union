import React, { Component } from 'react';
import style from '@xo-union/tk-component-membership-modal/lib/css';
import { FormTheme, Field, FieldGroup } from '@xo-union/tk-component-fields';
import { Button } from '@xo-union/tk-component-buttons';
import { NewWindowAnchor } from '@xo-union/component-standard-elements/lib/anchor';
import noop from 'xojs/lib/callbacks/noop';

export default function SignUpView({
  onClickLogIn = noop
}) {
  return (
    <div className={style['modal']}>
      <div className={style['header']}>
        Your personal wedding plan starts now
      </div>
      <p className={style['sub-header']}>
        {"Advice, tools, and the best local vendors to have a wedding that's uniquely you (cue the confetti!)"}
      </p>
      <form>
        <FormTheme>
          <FieldGroup>
            <Field name="email" />
          </FieldGroup>

          <FieldGroup>
            <Field name="password" label="Password (6 or more characters)"/>
          </FieldGroup>


          <Button block isCTA>
            Sign Up
          </Button>
        </FormTheme>
      </form>
      <div className={style['form-sub-text']}>
        <small>
          By signing up, you agree to our <NewWindowAnchor href="/terms-and-conditions">Terms</NewWindowAnchor> and <NewWindowAnchor href="/privacy-policy">Privacy Policy</NewWindowAnchor>.
        </small>
      </div>

      <div className={style['footer']}>
        Already a member of The Knot?  <a role="button" onClick={onClickLogIn}>Log In</a>
      </div>
    </div>
  )
}

