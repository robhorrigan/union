---
$imports:
  '{ Button, Link }': '@xo-union/buttons'
  packageJson: '@xo-union/buttons/package.json'
  'ButtonDemo': '#docs/demos/Button'
  '{ Snippet, InstallSnippet, Demo, PropTypesTable }': '#docs/doc-components'
  ButtonMetadata: '!!react-docgen-loader!@xo-union/buttons/src/components/Button'
---

<h1>{$props.title}</h1>

### Install

<InstallSnippet packageJson={packageJson} />

### Import

<Snippet lang="javascript">
import { Link, Button } from '@xo-union/buttons';
</Snippet>

### Properties

<PropTypesTable metadata={ButtonMetadata.props} />

### Usage

#### Buttons

###### Primary Buttons

<ButtonDemo size="papa" color="primary">
  Primary Papa
</ButtonDemo>

<ButtonDemo size="mama" color="primary">
  Primary Mama
</ButtonDemo>

<ButtonDemo size="baby" color="primary">
  Primary Baby
</ButtonDemo>

###### Secondary Buttons

<ButtonDemo size="papa" color="secondary">
  Secondary Papa
</ButtonDemo>

<ButtonDemo size="mama" color="secondary">
  Secondary Mama
</ButtonDemo>

<ButtonDemo size="baby" color="secondary">
  Secondary Baby
</ButtonDemo>

###### Tertiary Buttons
<ButtonDemo size="papa" color="tertiary">
  Tertiary Papa
</ButtonDemo>

<ButtonDemo size="mama" color="tertiary">
  Tertiary Mama
</ButtonDemo>

<ButtonDemo size="baby" color="tertiary">
  Tertiary Baby
</ButtonDemo>


###### Block buttons

<ButtonDemo size="papa" color="primary" block="xs">
  screen <= xs
</ButtonDemo>

<ButtonDemo size="papa" color="primary" block="sm">
  screen <= sm
</ButtonDemo>

<ButtonDemo size="papa" color="primary" block="md">
  screen <= md
</ButtonDemo>

<ButtonDemo size="papa" color="primary" block="lg">
  screen <= lg
</ButtonDemo>

<ButtonDemo size="papa" color="primary" block>
  Always block
</ButtonDemo>
