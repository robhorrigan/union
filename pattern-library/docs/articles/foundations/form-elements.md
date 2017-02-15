---
$imports:
  '{ Field, Dropdown, DropdownItem, Textarea, TextareaWithoutLabel, FieldGroup, FormTheme }': '@xo-union/fields'
  bsGrid: '@xo-union/bootstrap/grid'

  '{ Demo, Snippet, PropTypesTable, InstallSnippet }': '#docs/doc-components'
  packageJson: '@xo-union/fields/package.json'

  FieldMeta:                '!!react-docgen-loader!#/fields/components/Field'
  DropdownMeta:             '!!react-docgen-loader!#/fields/components/Dropdown'
  DropdownItemMeta:         '!!react-docgen-loader!#/fields/components/DropdownItem'
  FieldGroupMeta:           '!!react-docgen-loader!#/fields/components/FieldGroup'
  FormThemeMeta:            '!!react-docgen-loader!#/fields/components/FormTheme'
  TextareaMeta:             '!!react-docgen-loader!#/fields/components/Textarea'
  TextareaWithoutLabelMeta: '!!react-docgen-loader!#/fields/components/TextareaWithoutLabel'

  FormDemo: '#docs/demos/Form'
---

<h1>{$props.title}</h1>

<FormDemo />

## Usage

#### Install

<InstallSnippet packageJson={packageJson} />

#### Import

<Snippet lang="javascript">
import { Field, Dropdown, DropdownItem, Textarea, FormTheme } from '@xo-union/fields';
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

### Textarea Component(s)

<p>{TextareaMeta.description}</p>

<Demo cssDependencies={{ bsGrid }}>
  <FormTheme>
    <Textarea name="optional-message" />
  </FormTheme>
</Demo>

<Demo cssDependencies={{ bsGrid }}>
  <FormTheme>
    <TextareaWithoutLabel name="optional-message" placeholder="Optional message" />
  </FormTheme>
</Demo>

#### Properties

###### Textarea
<PropTypesTable metadata={TextareaMeta.props} />
