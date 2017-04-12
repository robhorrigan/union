---
$imports:
  'IconsDemo': '#docs/demos/Icons'
  'packageJson': '@xo-union/icons/package.json'
  '{ Snippet, Demo, PropTypesTable, InstallSnippet }': '#docs/doc-components'
  PropTypesTableMetadata: '!!react-docgen-loader!#docs/doc-components/PropTypesTable'
  SnippetsMetadata:       '!!react-docgen-loader!#docs/doc-components/Snippet'
  DemoMetadata:           '!!react-docgen-loader!#docs/doc-components/Demo'
---

<h1>{$props.title}</h1>

## Install

<InstallSnippet packageJson={packageJson} />

## Import

<Snippet lang="javascript">
import Icon from '@xo-union/icons';
</Snippet>

## Demos

<IconsDemo />
