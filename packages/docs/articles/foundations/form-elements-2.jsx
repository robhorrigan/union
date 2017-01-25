import React from 'react';
import * as Meta from '@union/fields/lib/meta';
import { Field, Dropdown, DropdownItem, Textarea } from '@union/fields';
import Markdown from 'react-remarkable';
import { Demo, Snippet } from 'documentation-utilities';
import PropTypesTable from 'documentation-utilities/PropTypesTable';
import bsGrid from '@union/bootstrap/lib/grid';
import bsUtils from '@union/bootstrap/lib/utilities';

export default () =>
<div>
  <h1>
    Form Elements
  </h1>

  <h2>
    Usage
  </h2>

  <h4>
    Install
  </h4>

  <Snippet lang="bash">
    npm install --save @union/fields
  </Snippet>

  <h4>
    Import
  </h4>

  <Snippet lang="javascript">
    import {"{ Field, Dropdown, DropdownItem, Textarea }"} from '@union/fields';
  </Snippet>

  <h2>
    Field
  </h2>

  <Demo>
    <Field name="email" />
  </Demo>

  <h2>
    Properties
  </h2>

  <PropTypesTable metadata={Meta.Field.props} />

  <h4>
    States
  </h4>

  <h5>
    Invalid
  </h5>

  <Demo>
    <Field name="email" valid={false} validationMessage="Something went wrong" />
  </Demo>

  <h3>
    Demo
  </h3>

  <FormFieldLargeDemo />
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
