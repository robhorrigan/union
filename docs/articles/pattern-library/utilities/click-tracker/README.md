---
$imports:
  InstallSnippet: '@components/InstallSnippet'
  Demo: '@components/Demo'
  Snippet: '@components/Snippet'
  PropTypesTable: '@components/PropTypesTable'
  packageJson: '@xo-union/tk-component-analytics/package.json'
  ClickTracker: '@xo-union/tk-component-analytics/lib/click-tracker'
  GenericClickTracker: '@xo-union/tk-component-analytics/lib/generic-click-tracker'
  '{ Button }': '@xo-union/tk-component-buttons'
  styles: '@styles/list-demo'
  ClickTrackerMetadata: '!!react-docgen-loader!@xo-union/tk-component-analytics/src/click-tracker'
  GenericClickTrackerMetadata: '!!react-docgen-loader!@xo-union/tk-component-analytics/src/generic-click-tracker'
  ClickTrackerExample: './examples/click-tracker-example'
  clickTrackerSnippetString: '!!raw-loader!./examples/click-tracker-example'
---

# Click tracker

`ClickTracker` is a utility component to add analytics click tracking to a component.

## Install

<InstallSnippet packageJson={packageJson} />

## Components

### ClickTracker

The `ClickTracker` component assumes a couple of things about its child components and how the analytics track call should be made.

**Trackable elements**
- Elements with the attributes `data-trackable` or `data-trackable-selection` are trackable.

**Track call**
- It assumes that the track call should be formatted as `{ platform: "web", product: "your-app-name", selection: "What was clicked" }`.

**Selection value**
- It uses the value of the `data-trackable-selection` attribute.
- It uses the element's text if the `data-trackable-selection` property is not present.
- If the `data-trackable-group` attribute is present, it formats the `selection` as `"group > selection"`.
- It lower cases the string

#### Properties

<PropTypesTable metadata={ClickTrackerMetadata.props} exclude={["default"]} />

#### Demo

*Note: To see the track calls, inspect the javascript console.*

<Snippet lang="jsx">{clickTrackerSnippetString}</Snippet>
<ClickTrackerExample />

### GenericClickTracker

The `GenericClickTracker` component is a lower level component that allows you to add click tracking to a component. The difference between the `GenericClickTracker` and `ClickTracker` is that `GenericClickTracker` does not make any assumptions.

#### Properties

<PropTypesTable metadata={GenericClickTrackerMetadata.props} />

#### Demo

```javascript
import GenericClickTracker from '@xo-union/tk-component-analytics/lib/generic-click-tracker';
```

<Demo ignoreProps={['className', 'analytics']}>
  <GenericClickTracker analytics={{ track: ::console.log }} trackableSelector="[data-trackable]" eventData={{ key1: 1, key2: 2 }} eventName="Demo Event">
    <ul className={styles['list-demo']}>
      <li>
        <Button data-trackable>I am trackable</Button>
      </li>
      <li>
        <Button>I am not trackable</Button>
      </li>
    </ul>
  </GenericClickTracker>
</Demo>
