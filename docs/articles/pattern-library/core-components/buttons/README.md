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


<ButtonsDemo size="papa" color="primary">Primary Papa</ButtonsDemo>

<ButtonsDemo size="mama" color="primary">Primary Mama</ButtonsDemo>

<ButtonsDemo size="baby" color="primary">Primary Baby</ButtonsDemo>

###### Secondary Buttons

<ButtonsDemo size="papa" color="secondary">Secondary Papa</ButtonsDemo>

<ButtonsDemo size="mama" color="secondary">Secondary Mama</ButtonsDemo>

<ButtonsDemo size="baby" color="secondary">Secondary Baby</ButtonsDemo>

###### Tertiary Buttons

<ButtonsDemo size="papa" color="tertiary">Tertiary Papa</ButtonsDemo>

<ButtonsDemo size="mama" color="tertiary">Tertiary Mama</ButtonsDemo>

<ButtonsDemo size="baby" color="tertiary">Tertiary Baby</ButtonsDemo>


###### Block buttons

<ButtonsDemo size="papa" color="primary" block="xs">screen lt or eq to xs</ButtonsDemo>

<ButtonsDemo size="papa" color="primary" block="sm">screen lt or eq to sm</ButtonsDemo>

<ButtonsDemo size="papa" color="primary" block="md">screen lt or eq to md</ButtonsDemo>

<ButtonsDemo size="papa" color="primary" block="lg">screen lt or eq to lg</ButtonsDemo>

<ButtonsDemo size="papa" color="primary" block>Always block</ButtonsDemo>