---
$imports:
  Snippet: '@components/Snippet'
  Demo: '@components/Demo'
  PropTypesTable: '@components/PropTypesTable'
  InstallSnippet: '@components/InstallSnippet'

  PropTypesTableMetadata: '!!react-docgen-loader!@components/PropTypesTable'
  SnippetsMetadata:       '!!react-docgen-loader!@components/Snippet'
  DemoMetadata:           '!!react-docgen-loader!@components/Demo'
  InstallSnippetMetadata: '!!react-docgen-loader!@components/InstallSnippet'
---

# Doc components

> These are components used to build this documentation

## PropTypesTable Component

<span>{PropTypesTableMetadata.description}</span>


#### Properties and Demo

> ***This is a little meta***: The following is a demo of the PropTypesTable describing the propTypes of the PropTypesTable.

<Demo propOverrides={{metadata: 'docGenMetadata.props'}} ignoreProps={["exclude"]}>
  <PropTypesTable metadata={PropTypesTableMetadata.props} exclude={["default"]}/>
</Demo>

## Snippet Component

<span>{SnippetsMetadata.description}</span>

#### Demo

<Demo>
  <Snippet lang="javascript">
1 + 1 === 2
  </Snippet>
</Demo>

#### Properties

<PropTypesTable metadata={SnippetsMetadata.props} exclude={["default"]} />

## Demo Component

<span>{DemoMetadata.description}</span>

#### Demo

This is a demo of the Demo component, we added a pink border to make the representation clearer.

<Demo>
  <Demo style={{border: 'dotted 10px pink'}}>
    <div style={{border: 'dashed 10px lightblue'}}>
Hello Demo
    </div>
  </Demo>
</Demo>

#### Properties

<PropTypesTable metadata={DemoMetadata.props} exclude={["default"]} />

## InstallSnippet Component

<span>{InstallSnippetMetadata.description}</span>

#### Demo

<Demo>
  <InstallSnippet packageJson={{name: "test-package", version: "1.0.0"}} />
</Demo>

#### Properties

<PropTypesTable metadata={InstallSnippetMetadata.props} exclude={["default"]} />
