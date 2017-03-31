---
$imports:
  Button: '@xo-union/buttons'
  packageJson: '@xo-union/buttons/package.json'
  '{ InstallSnippet, Demo, PropTypesTable }': '#docs/doc-components'
  ButtonMetadata: '!!react-docgen-loader!#/buttons/components'
---

<h1>{$props.title}</h1>

### Install

<InstallSnippet packageJson={packageJson} />

### Properties

<PropTypesTable metadata={ButtonMetadata.props} />

### Usage

#### Primary Buttons
<Demo>
  <Button size="papa" color="primary" text="Primary Papa" />
</Demo>

<Demo>
  <Button size="mama" color="primary" text="Primary Mama" />
</Demo>

<Demo>
  <Button size="baby" color="primary" text="Primary Baby" />
</Demo>

#### Secondary Buttons
<Demo>
  <Button size="papa" color="secondary" text="Secondary Papa" />
</Demo>

<Demo>
  <Button size="mama" color="secondary" text="Secondary Mama" />
</Demo>

<Demo>
  <Button size="baby" color="secondary" text="Secondary Baby" />
</Demo>


#### Tertiary Buttons
<Demo>
  <Button size="papa" color="tertiary" text="Tertiary Papa" />
</Demo>

<Demo>
  <Button size="mama" color="tertiary" text="Tertiary Mama" />
</Demo>

<Demo>
  <Button size="baby" color="tertiary" text="Tertiary Baby" />
</Demo>

#### Fitted buttons

##### Papa

<Demo>
  <Button size="papa" color="primary" text="Primary Papa" fitted="xs" />
</Demo>

<Demo>
  <Button size="papa" color="primary" text="Primary Papa" fitted="sm" />
</Demo>

<Demo>
  <Button size="papa" color="primary" text="Primary Papa" fitted="md" />
</Demo>

<Demo>
  <Button size="papa" color="primary" text="Primary Papa" fitted="lg" />
</Demo>

<Demo>
  <Button size="papa" color="primary" text="Primary Papa" fitted="xl" />
</Demo>

#### Mama

<Demo>
  <Button size="mama" color="primary" text="Primary Mama" fitted="xs" />
</Demo>

<Demo>
  <Button size="mama" color="primary" text="Primary Mama" fitted="sm" />
</Demo>

<Demo>
  <Button size="mama" color="primary" text="Primary Mama" fitted="md" />
</Demo>

<Demo>
  <Button size="mama" color="primary" text="Primary Mama" fitted="lg" />
</Demo>

<Demo>
  <Button size="mama" color="primary" text="Primary Mama" fitted="xl" />
</Demo>

#### Baby

<Demo>
  <Button size="baby" color="primary" text="Primary Baby" fitted="xs" />
</Demo>

<Demo>
  <Button size="baby" color="primary" text="Primary Baby" fitted="sm" />
</Demo>

<Demo>
  <Button size="baby" color="primary" text="Primary Baby" fitted="md" />
</Demo>

<Demo>
  <Button size="baby" color="primary" text="Primary Baby" fitted="lg" />
</Demo>

<Demo>
  <Button size="baby" color="primary" text="Primary Baby" fitted="xl" />
</Demo>

