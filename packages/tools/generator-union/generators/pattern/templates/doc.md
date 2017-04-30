---
$imports:
  '<%= moduleName %>': '<%= packageName %>'
  packageJson: '<%= packageName %>/package.json'
  '{ InstallSnippet, Demo, PropTypesTable }': '#docs/doc-components'
  '<%= moduleName %>Metadata': '!!react-docgen-loader!<%= patternSrcPath %>'
---

<h1>{$props.title}</h1>

### Install

<InstallSnippet packageJson={packageJson} />

### Usage

<Demo>
  <<%= moduleName %> />
</Demo>

<PropTypesTable metadata={<%= moduleName %>Metadata.props} />

### Development

To make changes to this pattern, go to: `<%= relativePatternSrcPath %>`.
Tests are in `<%= relativePatternSpecPath %>`.
