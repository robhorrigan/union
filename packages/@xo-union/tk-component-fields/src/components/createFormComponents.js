import React, { Component } from 'react';
import Form from './Form';
import Field from './Field';
import fieldContainer from '../containers/Field';
import formContainer from '../containers/form';

export default function createFormComponents({ name }) {
  return {
    Form: formContainer(Form),
    Field: fieldContainer(Field, { ownedBy: name })
  };
}
