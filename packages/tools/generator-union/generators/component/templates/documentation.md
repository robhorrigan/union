---
$imports:
  '<%= moduleName %>': '<%= packageName %>'
  packageJson: '<%= packageName %>/package.json'
  '{ InstallSnippet, Demo, PropTypesTable }': 'doc-components'
  '<%= moduleName %>Metadata': '!!react-docgen!<%= packageName %>/src/index'
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

To make changes to this component, go to: `./packages/components/<%= componentName %>`.

<% if (wantsToCreateCssModule) { %>
To change the css module. go to: `./packages/components/<%= cssModuleName %>`
<% } %>
