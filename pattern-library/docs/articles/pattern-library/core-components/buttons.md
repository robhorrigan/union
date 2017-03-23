---
$imports:
  Buttons: '@xo-union/buttons'
  packageJson: '@xo-union/buttons/package.json'
  '{ InstallSnippet, Demo, PropTypesTable }': '#docs/doc-components'
  ButtonsMetadata: '!!react-docgen-loader!#/buttons/components'
---

<h1>{$props.title}</h1>

### Install

<InstallSnippet packageJson={packageJson} />

### Properties

<PropTypesTable metadata={ButtonsMetadata.props} />

### Usage

#### Primary Buttons
<Demo>
  <Buttons size="papa" color="primary" text="Primary Papa" />
</Demo>

<Demo>
  <Buttons size="mama" color="primary" text="Primary Mama" />
</Demo>

<Demo>
  <Buttons size="baby" color="primary" text="Primary Baby" />
</Demo>

#### Secondary Buttons
<Demo>
  <Buttons size="papa" color="secondary" text="Secondary Papa" />
</Demo>

<Demo>
  <Buttons size="mama" color="secondary" text="Secondary Mama" />
</Demo>

<Demo>
  <Buttons size="baby" color="secondary" text="Secondary Baby" />
</Demo>


#### Tertiary Buttons
<Demo>
  <Buttons size="papa" color="tertiary" text="Tertiary Papa" />
</Demo>

<Demo>
  <Buttons size="mama" color="tertiary" text="Tertiary Mama" />
</Demo>

<Demo>
  <Buttons size="baby" color="tertiary" text="Tertiary Baby" />
</Demo>
