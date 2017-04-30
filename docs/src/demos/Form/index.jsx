import React, { Component, PropTypes } from 'react';
import {
  FormTheme,
  FieldGroup,
  Field,
  Dropdown,
  DropdownItem,
  Textarea,
  TextareaWithoutLabel
} from '@xo-union/fields';

import bsGrid from '@xo-union/bootstrap/lib/grid';
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
        <FormTheme name={theme} className={bsGrid.container}>
          <FormContainer>
            <FieldGroup>
              <div className={bsGrid.col12}>
                <Dropdown name="theme" value={theme} onSelect={this.updateTheme}>
                  <DropdownItem label="gray" />
                  <DropdownItem label="white" />
                </Dropdown>
              </div>
            </FieldGroup>

            <FieldGroup>
              <div className={bsGrid.col12}>
                <Field
                  name="email"
                  state="invalid"
                  validationMessage="Must be a valid email"
                  defaultValue="email@email.com"
                />
              </div>
            </FieldGroup>

            <FieldGroup>
              <div className={bsGrid.col12}>
                <Field name="address" state="valid" defaultValue="232 Boerum St." />
              </div>
            </FieldGroup>

            <FieldGroup>
              <div className={bsGrid.col12}>
                <Field name="city" />
              </div>
            </FieldGroup>

            <FieldGroup>
              <div className={bsGrid.col7}>
                <Field name="state" />
              </div>

              <div className={bsGrid.col5}>
                <Field name="zipcode" />
              </div>
            </FieldGroup>

            <FieldGroup>
              <div className={bsGrid.col12}>
                <Field name="country" disabled />
              </div>
            </FieldGroup>

            <FieldGroup>
              <div className={bsGrid.col12}>
                <Dropdown name="wedding-season">
                  <DropdownItem label="Winter" />
                  <DropdownItem label="Spring" />
                  <DropdownItem label="Summer" />
                  <DropdownItem label="Fall" />
                </Dropdown>
              </div>
            </FieldGroup>

            <FieldGroup>
              <div className={bsGrid.col12}>
                <Textarea name="optional-message" />
              </div>
            </FieldGroup>

            <FieldGroup>
              <div className={bsGrid.col12}>
                <TextareaWithoutLabel name="optional-message" rows="5" placeholder={textareaText} />
              </div>
            </FieldGroup>
          </FormContainer>
        </FormTheme>
      </div>
    );
  }
}
