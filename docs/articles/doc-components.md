---
$imports:
  '{ Snippet, Demo, PropTypesTable, InstallSnippet }': '#docs/doc-components'
  spacing: '@xo-union/utilities/lib/spacing'
  PropTypesTableMetadata: '!!react-docgen-loader!#docs/doc-components/PropTypesTable'
  SnippetsMetadata:       '!!react-docgen-loader!#docs/doc-components/Snippet'
  DemoMetadata:           '!!react-docgen-loader!#docs/doc-components/Demo'
  InstallSnippetMetadata: '!!react-docgen-loader!#docs/doc-components/InstallSnippet'
---

<h1>{$props.title}</h1>

> These are components used to build this documentation

<div className={spacing.mt5}></div>

## PropTypesTable Component

<span>{PropTypesTableMetadata.description}</span>


<div className={spacing.mt4}></div>

#### Properties and Demo

> ***This is a little meta***: The following is a demo of the PropTypesTable describing the propTypes of the PropTypesTable.

<Demo propOverrides={{metadata: 'docGenMetadata.props'}} ignoreProps={["exclude"]}>
  <PropTypesTable metadata={PropTypesTableMetadata.props} exclude={["default"]}/>
</Demo>

<div className={spacing.mt5}></div>

## Snippet Component

<span>{SnippetsMetadata.description}</span>

<div className={spacing.mt4}></div>

#### Demo

<Demo>
  <Snippet lang="javascript">
1 + 1 === 2
  </Snippet>
</Demo>

<div className={spacing.mt4}></div>

#### Properties

<PropTypesTable metadata={SnippetsMetadata.props} exclude={["default"]} />

<div className={spacing.mt5}></div>

## Demo Component

<span>{DemoMetadata.description}</span>

<div className={spacing.mt4}></div>

#### Demo

This is a demo of the Demo component, we added a pink border to make the representation clearer.

<Demo>
  <Demo style={{border: 'dotted 10px pink'}}>
    <div style={{border: 'dashed 10px lightblue'}}>
Hello Demo
    </div>
  </Demo>
</Demo>

<div className={spacing.mt4}></div>

#### Properties

<PropTypesTable metadata={DemoMetadata.props} exclude={["default"]} />

<div className={spacing.mt5}></div>

## InstallSnippet Component

<span>{InstallSnippetMetadata.description}</span>

<div className={spacing.mt4}></div>

#### Demo

<Demo>
  <InstallSnippet packageJson={{name: "test-package", version: "1.0.0"}} />
</Demo>

<div className={spacing.mt4}></div>

#### Properties

<PropTypesTable metadata={InstallSnippetMetadata.props} exclude={["default"]} />
