import React from 'react';
import style from '@xo-union/tk-component-membership-modal/lib/css';
import Modal from '@xo-union/tk-component-modal';
import { FormTheme, Field, FieldGroup } from '@xo-union/tk-component-fields';
import { Button } from '@xo-union/tk-component-buttons';
import { NewWindowAnchor } from '@xo-union/component-standard-elements/lib/anchor';
import noop from 'xojs/lib/callbacks/noop';

function SignUpModalContent({
  onClickLogin = noop
}) {
  return (
    <div className={style['sign-up-modal']}>
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
      <div className={style['terms-and-conditions']}>
        <small>
          By signing up, you agree to our <NewWindowAnchor href="/terms-and-conditions">Terms</NewWindowAnchor> and <NewWindowAnchor href="/privacy-policy">Privacy Policy</NewWindowAnchor>.
        </small>
      </div>

      <div className={style['footer']}>
        Already a member of The Knot?  <a role="button" onClick={onClickLogin}>Log In</a>
      </div>
    </div>
  )
}

export default function MembershipModal() {
  return (
    <Modal>
      <SignUpModalContent />
    </Modal>
  );
}
