---
$imports:
  '{ Field, Dropdown, DropdownItem, Textarea, FieldGroup, FormTheme }': '@union/fields'
  bsGrid: '@union/bootstrap/lib/grid'
  colors: '@union/colors'

  '{ Demo, Snippet, PropTypesTable, InstallSnippet }': 'doc-components'
  packageJson: '@union/fields/package.json'
  FieldMeta: '!!react-docgen!@union/fields/src/components/Field'
  DropdownMeta: '!!react-docgen!@union/fields/src/components/Dropdown'
  DropdownItemMeta: '!!react-docgen!@union/fields/src/components/DropdownItem'
  FieldGroupMeta: '!!react-docgen!@union/fields/src/components/FieldGroup'
  FormThemeMeta: '!!react-docgen!@union/fields/src/components/FormTheme'

  FormDemo: 'demos/Form'
---

<h1>{$props.title}</h1>

<FormDemo />

## Usage

#### Install

<InstallSnippet packageJson={packageJson} />

#### Import

<Snippet lang="javascript">
import { Field, Dropdown, DropdownItem, Textarea, FormTheme } from '@union/fields';
</Snippet>

### FormTheme component

<p>{FormThemeMeta.description}</p>

<Demo cssDependencies={{ bsGrid }}>
  <div>
    <FormTheme>
      <FieldGroup>
        <div className={bsGrid.col12}>
          <Field name="email" />
        </div>
      </FieldGroup>
    </FormTheme>

    <FormTheme name="white">
      <FieldGroup>
        <div className={bsGrid.col12}>
          <Field name="email" />
        </div>
      </FieldGroup>
    </FormTheme>
  </div>
</Demo>

#### Properties

<PropTypesTable metadata={FormThemeMeta.props} />

### Field Component

<Demo>
  <FormTheme>
    <Field name="email" />
  </FormTheme>
</Demo>

#### Properties

<PropTypesTable metadata={FieldMeta.props} />

#### Invalid State

<Demo>
  <Field name="email" state="invalid" validationMessage="Something went wrong" />
</Demo>

#### Successful State

<Demo>
  <Field name="address" state="valid" defaultValue="232 Boerum St." />
</Demo>

#### Disabled State

<Demo>
  <Field name="email" disabled />
</Demo>

### Dropdown Component

<Demo>
  <FormTheme>
    <Dropdown name="Season">
      <DropdownItem label="Winter" />
      <DropdownItem label="Spring" />
      <DropdownItem label="Summer" />
      <DropdownItem label="Fall"/>
    </Dropdown>
  </FormTheme>
</Demo>

#### Properties

##### Dropdown
<PropTypesTable metadata={DropdownMeta.props} exclude={["default"]}/>

##### DropdownItem
<PropTypesTable metadata={DropdownItemMeta.props} exclude={["default"]}/>


### FieldGroup Component

<p>{FieldGroupMeta.description}</p>

<Demo cssDependencies={{ bsGrid }}>
  <FormTheme>
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
  </FormTheme>
</Demo>

#### Properties

<PropTypesTable metadata={FieldGroupMeta.props} exclude={["default"]} />
