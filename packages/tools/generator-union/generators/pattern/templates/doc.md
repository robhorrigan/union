---
$imports:
  '<%= moduleName %>': '<%= packageName %>'
  packageJson: '<%= packageName %>/package.json'
  InstallSnippet: '@components/InstallSnippet'
  Demo: '@components/Demo'
  PropTypesTable: '@components/PropTypesTable'
  '<%= moduleName %>Metadata': '!!react-docgen-loader!<%= patternSrcPath %>'
---

# Pattern name

### Install

<InstallSnippet packageJson={packageJson} />

### Usage

<Demo>
  <<%= moduleName %> />
</Demo>

<PropTypesTable metadata={<%= moduleName %>Metadata.props} />

### Development

To make changes to this pattern, go to: `<%= relativePatternSrcPath %>`.
