---
$imports:
  '{ Field, Dropdown, DropdownItem, Textarea, FieldGroup }': '@union/fields'
  packageJson: '@union/fields/package.json'
  FieldMeta: '!!react-docgen!@union/fields/src/components/Field'
  DropdownMeta: '!!react-docgen!@union/fields/src/components/Dropdown'
  FieldGroupMeta: '!!react-docgen!@union/fields/src/components/FieldGroup'
  bsGrid: '@union/bootstrap/lib/grid'
  bsUtils: '@union/bootstrap/lib/utilities'

  '{ Demo, Snippet, PropTypesTable, InstallSnippet }': 'doc-components'
---

<h1>{$props.title}</h1>

## Usage

#### Install

<InstallSnippet packageJson={packageJson} />

#### Import

<Snippet lang="javascript">
import { Field, Dropdown, DropdownItem, Textarea } from '@union/fields';
</Snippet>


### Field Component

<Demo>
  <Field name="email" />
</Demo>

#### Properties

<PropTypesTable metadata={FieldMeta.props} />

#### Invalid State

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

<PropTypesTable metadata={DropdownMeta.props} />

### FieldGroup Component

<p>{FieldGroupMeta.description}</p>

<Demo cssDependencies={{ bsGrid }}>
  <div>
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
  </div>
</Demo>

#### Properties

<PropTypesTable metadata={FieldGroupMeta.props} />

### Demo

<Demo cssDependencies={{ bsGrid }}>
  <div>
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
  </div>
</Demo>
