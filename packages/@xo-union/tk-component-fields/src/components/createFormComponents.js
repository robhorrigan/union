import React, { Component } from 'react';
import Form from './Form';
import Field from './Field';
import fieldContainer from '../containers/Field';

export default function createFormComponents({ name }) {
  return {
    Form(props) {
      return <Form name={name} {...props} />;
    },
    Field: fieldContainer(Field, { ownedBy: name })
  };
}
