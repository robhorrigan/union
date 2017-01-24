import React from 'react';
import Markdown from 'react-remarkable';
import * as Meta from '@union/fields/lib/meta';
import { Field, Dropdown, DropdownItem, Textarea } from '@union/fields';
import { Demo, Snippet, PropTypesTable } from 'documentation-utilities';
import bsGrid from '@union/bootstrap/lib/grid';
import bsUtils from '@union/bootstrap/lib/utilities';

export default () =>
<div>
  <h1>
    Form Elements
  </h1>

  <h3>
    Install
  </h3>

  <Snippet lang="bash">
    npm install --save @union/fields
  </Snippet>

  <h3>
    Demo
  </h3>

  <FormFieldLargeDemo />

  <h3>
    Field
  </h3>

  <h6>
    PropTypes
  </h6>

  <PropTypesTable metadata={Meta.Field.props} />

  <Demo>
    <Field name="email" />
  </Demo>

  <Demo>
    <Field name="email" valid={false} validationMessage="Something went wrong" />
  </Demo>
</div>

/* Documentation end */
function FormFieldLargeDemo() {
  return  (
    <Demo dependsOn={{ bsUtils, bsGrid }}>
      <div>
        <div className={bsUtils.mb3}>
          <div className={bsGrid.row}>
            <div className={bsGrid.col6}>
              <Field name="email" />
            </div>

            <div className={bsGrid.col6}>
              <Field name="domain" />
            </div>
          </div>
        </div>

        <div className={bsUtils.mb3}>
          <div className={bsGrid.row}>
            <div className={bsGrid.col12}>
              <Field name="password" />
            </div>
          </div>
        </div>

        <div className={bsUtils.mb3}>
          <div className={bsGrid.row}>
            <div className={bsGrid.col12}>
              <Dropdown name="season">
                <DropdownItem label="Winter" />
                <DropdownItem label="Spring" />
                <DropdownItem label="Summer" />
                <DropdownItem label="Fall" />
              </Dropdown>
            </div>
          </div>
        </div>

        <div className={bsUtils.mb3}>
          <div className={bsGrid.row}>
            <div className={bsGrid.col12}>
              <Textarea name="description-1" />
            </div>
          </div>
        </div>
      </div>
    </Demo>
  );
}
