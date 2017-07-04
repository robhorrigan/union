import React from 'react';
import { mount } from 'enzyme';
import Field from '../Field';
import HiddenField from '../HiddenField';
import Form from './';

describe('<Form>', () => {
  describe('complete form', () => {
    it('captures current state of form', () => {
      const subject = mount(
        <Form>
          <Field
            name="email"
            type="email"
            value="emailValue"
          />

          <Field
            name="password"
            type="password"
            value="passwordValue"
          />
        </Form>
      );


      const formInstance = subject.instance();

      expect(formInstance.formData.fields.email.value).toBe('emailValue');
      expect(formInstance.formData.fields.password.value).toBe('passwordValue');
    });

    it('supports hidden fields', () => {
      const subject = mount(
        <Form>
          <HiddenField
            name="email"
            value="emailValue"
          />
        </Form>
      );

      const formInstance = subject.instance();

      expect(formInstance.formData.fields.email.value).toBe('emailValue');
    });
  });
});
