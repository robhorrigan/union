import React from 'react';
import style from '@xo-union/tk-component-membership-modal/lib/css';
import { FormTheme, Field, FieldGroup } from '@xo-union/tk-component-fields';
import { Button } from '@xo-union/tk-component-buttons';
import { TheKnotLogo } from '@xo-union/tk-component-icons';

export default function LogInView({
  onClickSignUp
}) {
  return (
    <div className={style['modal']}>
      <div className={style['log-in-header']}>
        Log into <TheKnotLogo />
      </div>
      <form>
        <FormTheme>
          <FieldGroup>
            <Field name="email" label="Your email address" />
          </FieldGroup>

          <FieldGroup>
            <Field name="password" type="password" />
          </FieldGroup>


          <Button block isCTA>
            Go
          </Button>
        </FormTheme>
      </form>
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
