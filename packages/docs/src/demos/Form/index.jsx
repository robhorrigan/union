import React, { Component } from 'react';
import {
  FormTheme,
  FieldGroup,
  Field,
  Dropdown,
  DropdownItem,
  Textarea
} from '@union/fields';

import bsGrid from '@union/bootstrap/lib/grid';
import bsUtils from '@union/bootstrap/lib/utilities';
import styles from './styles.css';

const themeClassMap = {
  gray: styles.demoForGrayTheme,
  white: styles.demoForWhiteTheme
};

function FormContainer({ children }) {
  const columnClasses = [
    bsGrid.col12,
    bsGrid.colMd6,
    bsUtils.justifyContentEnd
  ].join(' ');

  return (
    <div className={bsGrid.row}>
      <div className={columnClasses}>
      </div>
      <div className={columnClasses}>
        {children}
      </div>
    </div>
  );
}

export default class FormDemo extends Component {
  state = {
    theme: 'gray'
  };

  _updateTheme = (theme) => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;

    return (
      <div className={themeClassMap[theme]}>
        <FormTheme name={theme} className={bsGrid.container}>
          <FormContainer>
            <FieldGroup>
              <div className={bsGrid.col12}>
                <Dropdown name="theme" value={theme} onSelect={this._updateTheme}>
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
                  defaultValue="email@email.com" />
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
          </FormContainer>
        </FormTheme>
      </div>
    );
  }
}
