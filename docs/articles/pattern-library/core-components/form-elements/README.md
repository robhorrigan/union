---
$imports:
  '{ Form, Field, Dropdown, DropdownItem, Textarea, TextareaWithoutLabel, FieldGroup, FormTheme }': '@xo-union/tk-component-fields'

  Demo: '@components/Demo'
  Snippet: '@components/Snippet'
  PropTypesTable: '@components/PropTypesTable'
  InstallSnippet: '@components/InstallSnippet'

  packageJson: '@xo-union/tk-component-fields/package.json'

  FieldMeta:                '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/Field'
  DropdownMeta:             '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/Dropdown'
  DropdownItemMeta:         '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/DropdownItem'
  FieldGroupMeta:           '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/FieldGroup'
  FormThemeMeta:            '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/FormTheme'
  TextareaMeta:             '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/Textarea'
  TextareaWithoutLabelMeta: '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/TextareaWithoutLabel'

  FormDemo: './demos/FormDemo'
---

# Form Elements

<FormDemo />

## Install

<InstallSnippet packageJson={packageJson} />

## Recipes

- [Form with validation](/pattern-library/core-components/form-elements/recipes/validation)

## Components

- [Field](/pattern-library/core-components/form-elements/components/Field)
- [Dropdown](/pattern-library/core-components/form-elements/components/Dropdown)
- [FieldGroup](/pattern-library/core-components/form-elements/components/FieldGroup)
- [Textarea](/pattern-library/core-components/form-elements/components/Textarea)
- [Form](/pattern-library/core-components/form-elements/components/Form)
- [HiddenField](/pattern-library/core-components/form-elements/components/HiddenField)

