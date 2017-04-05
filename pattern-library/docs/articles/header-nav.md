---
$imports:
  'HeaderNav': '@xo-union/header-nav'
  packageJson: '@xo-union/header-nav/package.json'
  '{ InstallSnippet, Demo, PropTypesTable }': '#docs/doc-components'
  'HeaderNavMetadata': '!!react-docgen-loader!#/header-nav'
---

<h1>{$props.title}</h1>

### Install

<InstallSnippet packageJson={packageJson} />

### Usage

<Demo>
  <HeaderNav />
</Demo>

<PropTypesTable metadata={HeaderNavMetadata.props} />

### Development

To make changes to this pattern, go to: `./pattern-library/src/header-nav`.
Tests are in `./pattern-library/spec/header-nav`.
