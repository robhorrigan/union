---
$imports:
  '{ Snippet, Demo, PropTypesTable }': 'doc-components'
  PropTypesTableMetadata: '!!react-docgen!doc-components/PropTypesTable'
  SnippetsMetadata: '!!react-docgen!doc-components/Snippet'
  DemoMetadata: '!!react-docgen!doc-components/Demo'
---

<h1>{$props.title}</h1>

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
