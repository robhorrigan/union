---
imports:
  '{ Field, Dropdown, DropdownItem, Textarea }': '@union/fields'
  '* as Meta': '@union/fields/lib/meta'
  bsGrid: '@union/bootstrap/lib/grid'
  bsUtils: '@union/bootstrap/lib/utilities'

  '{ Demo }': 'doc-components'
  Snippet: 'doc-components/Snippet'
  PropTypesTable: 'doc-components/PropTypesTable'
---

# Form Elements

## Usage

###### Install

<Snippet lang="bash">
npm install --save @union/fields
</Snippet>

###### Import

<Snippet lang="javascript">
import { Field, Dropdown, DropdownItem, Textarea } from '@union/fields';
</Snippet>


### Field Component

<Demo>
  <Field name="email" />
</Demo>

#### Properties

<PropTypesTable metadata={Meta.Field.props} />

#### States

##### Invalid

<Demo>
  <Field name="email" valid={false} validationMessage="Something went wrong" />
</Demo>

### Dropdown Component

<Demo>
  <Dropdown name="Season">
    <DropdownItem label="Winter" />
    <DropdownItem label="Spring" />
    <DropdownItem label="Summer" />
    <DropdownItem label="Fall" />
  </Dropdown>
</Demo>

#### Properties

<PropTypesTable metadata={Meta.Dropdown.props} />

### Demo

<Demo cssDependencies={{ bsUtils, bsGrid }}>
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
