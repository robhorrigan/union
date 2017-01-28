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

export default class FormDemo extends Component {
  state = {
    theme: 'gray'
  };

  _updateTheme = (theme) => {
    this.setState({ theme });
  };

  themeClass() {
    if (this.state.theme === 'gray') {
      return styles.demoForGrayTheme;
    }

    return styles.demoForWhiteTheme;
  }

  render() {
    const { theme } = this.state;

    const containerClasses = [this.themeClass(), bsUtils.py3].join(' ');

    return (
      <div className={containerClasses}>
        <FormTheme name={theme} className={bsGrid.container}>
          <FieldGroup>
            <div className={bsGrid.col12}>
              <Dropdown name="theme" value={theme} onSelect={this._updateTheme}>
                <DropdownItem label="gray" />
                <DropdownItem label="white" />
              </Dropdown>
            </div>
          </FieldGroup>

          <FieldGroup>
            <div className={bsGrid.col6}>
              <Field name="email" />
            </div>

            <div className={bsGrid.col6}>
              <Field name="domain" />
            </div>
          </FieldGroup>

          <FieldGroup>
            <div className={bsGrid.col12}>
              <Field name="password" />
            </div>
          </FieldGroup>

          <FieldGroup>
            <div className={bsGrid.col12}>
              <Dropdown name="season">
                <DropdownItem label="Winter" />
                <DropdownItem label="Spring" />
                <DropdownItem label="Summer" />
                <DropdownItem label="Fall" />
              </Dropdown>
            </div>
          </FieldGroup>

          <FieldGroup>
            <div className={bsGrid.col12}>
              <Textarea name="description-1" />
            </div>
          </FieldGroup>
        </FormTheme>
      </div>
    );
  }
}
