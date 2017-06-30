import React from 'react';
import style from '@xo-union/tk-component-membership-modal/lib/css';
import Modal from '@xo-union/tk-component-modal';
import { FormTheme, Field, FieldGroup } from '@xo-union/tk-component-fields';
import { Button } from '@xo-union/tk-component-buttons';

function SignUpModalContent() {
  return (
    <div>
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
