import React from 'react';
import Form from './Form';
import Field from './Field';

export default function createFormComponents({ name }) {
  return {
    Form(props) {
      return <Form name={name} {...props} />
    },
    Field(props) {
      return <Field ownedBy={name} {...props} />
    }
  };
}
