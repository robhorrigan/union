---
permalink: pattern-library/core-components/buttons
title: Buttons
$imports:
  '{ Button, Link }': '@xo-union/tk-component-buttons'
  packageJson: '@xo-union/tk-component-buttons/package.json'
  MainDemo: './demos/MainDemo'
  ButtonsDemo: './demos/ButtonsDemo'
  '{ Snippet, InstallSnippet, Demo, PropTypesTable }': '#docs/doc-components'
  ButtonMetadata: '!!react-docgen-loader!@xo-union/tk-component-buttons/src/components/Button'
---

<MainDemo />

<h1>{$props.title}</h1>

### Install

<InstallSnippet packageJson={packageJson} />

### Import

```javascript
import { Link, Button } from '@xo-union/tk-component-buttons';
```

### Properties

<PropTypesTable metadata={ButtonMetadata.props} />

### Usage

#### Buttons

###### Primary Buttons


<ButtonDemo size="papa" color="primary">Primary Papa</ButtonDemo>

<ButtonDemo size="mama" color="primary">Primary Mama</ButtonDemo>

<ButtonDemo size="baby" color="primary">Primary Baby</ButtonDemo>

###### Secondary Buttons

<ButtonDemo size="papa" color="secondary">Secondary Papa</ButtonDemo>

<ButtonDemo size="mama" color="secondary">Secondary Mama</ButtonDemo>

<ButtonDemo size="baby" color="secondary">Secondary Baby</ButtonDemo>

###### Tertiary Buttons

<ButtonDemo size="papa" color="tertiary">Tertiary Papa</ButtonDemo>

<ButtonDemo size="mama" color="tertiary">Tertiary Mama</ButtonDemo>

<ButtonDemo size="baby" color="tertiary">Tertiary Baby</ButtonDemo>


###### Block buttons

<ButtonDemo size="papa" color="primary" block="xs">screen lt or eq to xs</ButtonDemo>

<ButtonDemo size="papa" color="primary" block="sm">screen lt or eq to sm</ButtonDemo>

<ButtonDemo size="papa" color="primary" block="md">screen lt or eq to md</ButtonDemo>

<ButtonDemo size="papa" color="primary" block="lg">screen lt or eq to lg</ButtonDemo>

<ButtonDemo size="papa" color="primary" block>Always block</ButtonDemo>