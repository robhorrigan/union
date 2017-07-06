import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormTheme,
  FieldGroup,
  Field,
  Dropdown,
  DropdownItem,
  Textarea,
  TextareaWithoutLabel,
  Form
} from '@xo-union/tk-component-fields';

import bsGrid from '@xo-union/tk-css-bootstrap/lib/grid';
import styles from './styles.css';

const themeClassMap = {
  gray: styles.demoForGrayTheme,
  white: styles.demoForWhiteTheme
};

function FormContainer({ children }) {
  const columnClasses = [
    bsGrid.col12,
    bsGrid.colMd6
  ].join(' ');

  return (
    <div className={bsGrid.row}>
      <div className={columnClasses} />
      <div className={columnClasses}>
        {children}
      </div>
    </div>
  );
}

FormContainer.propTypes = {
  children: PropTypes.node
};

export default class FormDemo extends Component {
  state = {
    theme: 'gray'
  };

  updateTheme = (theme) => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;

    const textareaText =
      'Example note: Hi! Thank you so much for inviting us to your wedding. See you soon!';

    return (
      <div className={themeClassMap[theme]}>
        <FormContainer>
          <Form theme={theme} className={bsGrid.container}>
            <FieldGroup>
              <Dropdown name="theme" value={theme} onSelect={this.updateTheme}>
                <DropdownItem label="gray" />
                <DropdownItem label="white" />
              </Dropdown>
            </FieldGroup>

            <FieldGroup>
              <Field
                name="email"
                state="invalid"
                validationMessage="Must be a valid email"
                defaultValue="email@email.com"
              />
            </FieldGroup>

            <FieldGroup>
              <Field name="address" state="valid" defaultValue="232 Boerum St." />
            </FieldGroup>

            <FieldGroup>
              <Field name="city" />
            </FieldGroup>

            <FieldGroup>
              <Field name="state" />

              <Field name="zipcode" />
            </FieldGroup>

            <FieldGroup>
              <Field name="country" disabled />
            </FieldGroup>

            <FieldGroup>
              <Dropdown name="wedding-season">
                <DropdownItem label="Winter" />
                <DropdownItem label="Spring" />
                <DropdownItem label="Summer" />
                <DropdownItem label="Fall" />
              </Dropdown>
            </FieldGroup>

            <FieldGroup>
              <Textarea name="optional-message" />
            </FieldGroup>

            <FieldGroup>
              <Textarea label={false} name="optional-message" rows="5" placeholder={textareaText} />
            </FieldGroup>
          </Form>
        </FormContainer>
      </div>
    );
  }
}
