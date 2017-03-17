---
$imports:
  'Buttons': '@xo-union/buttons'
  packageJson: '@xo-union/buttons/package.json'
  '{ InstallSnippet, Demo, PropTypesTable }': '#docs/doc-components'
  'ButtonsMetadata': '!!react-docgen-loader!#/buttons/components/PrimaryPapa'
---

<h1>{$props.title}</h1>
### Install

<InstallSnippet packageJson={packageJson} />

### Usage

#### Primary Buttons
<Demo>
  <Buttons type="button" size="btnPapa" style="btnPrimary" buttonText="Primary Papa" />
</Demo>

<Demo>
  <Buttons type="button" size="btnMama" style="btnPrimary" buttonText="Primary Mama" />
</Demo>

<Demo>
  <Buttons type="button" size="btnBaby" style="btnPrimary" buttonText="Primary Baby" />
</Demo>

#### Secondary Buttons
<Demo>
  <Buttons type="button" size="btnPapa" style="btnSecondary" buttonText="Secondary Papa" />
</Demo>

<Demo>
  <Buttons type="button" size="btnMama" style="btnSecondary" buttonText="Secondary Mama" />
</Demo>

<Demo>
  <Buttons type="button" size="btnBaby" style="btnSecondary" buttonText="Secondary Baby" />
</Demo>

#### Tertiary Buttons
<Demo>
  <Buttons type="button" size="btnPapa" style="btnTertiary" buttonText="Tertiary Papa" />
</Demo>

<Demo>
  <Buttons type="button" size="btnMama" style="btnTertiary" buttonText="Tertiary Mama" />
</Demo>

<Demo>
  <Buttons type="button" size="btnBaby" style="btnTertiary" buttonText="Tertiary Baby" />
</Demo>



### Development

To make changes to this pattern, go to: `./pattern-library/src/buttons`.
Tests are in `./pattern-library/spec/buttons`.
