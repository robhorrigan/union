---
title: Colors
$imports:
  uniqueColorNames: './helpers/uniqueColors'
  Palette: './Palette'
  packageJson: '@xo-union/tk-css-colors/package.json'
  '{ Snippet, InstallSnippet }': '#docs/doc-components'
  classCompositionExampleString: '!!raw-loader!./examples/class-composition.css'
  classCompositionComponentExampleString: '!!raw-loader!./examples/class-composition-component'
  ClassCompositionDemo: './examples/class-composition-component'
  referencingValuesExampleString: '!!raw-loader!./examples/referencing-values.css'
  ReferencingValuesDemo: './examples/referencing-values-component'
---

<h1>{$props.title}</h1>

<p>Union's color palette includes {uniqueColorNames().length} unique colors</p>

## Setup

To install
<InstallSnippet packageJson={packageJson} />

## Examples

##### Class composition

This way of consuming the css classes is good when creating component classes

<Snippet lang="css">{classCompositionExampleString}</Snippet>
<ClassCompositionDemo />

##### Referencing values

This way of consuming the colors is necessary when using the colors in non-composable rules. Such as pseudo, attribute, or tag selectors.

<Snippet lang="css">{referencingValuesExampleString}</Snippet>
<ReferencingValuesDemo />

##### Applying class to component
<Snippet lang="javascript">{classCompositionComponentExampleString}</Snippet>

### Palette

<Palette />
