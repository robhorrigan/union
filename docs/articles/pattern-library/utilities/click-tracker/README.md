---
$imports:
  InstallSnippet: '#docs/doc-components/InstallSnippet'
  Demo: '#docs/doc-components/Demo'
  packageJson: '@xo-union/tk-component-analytics/package.json'
  ClickTracker: '@xo-union/tk-component-analytics/lib/click-tracker'
  GenericClickTracker: '@xo-union/tk-component-analytics/lib/generic-click-tracker'
  '{ Button }': '@xo-union/tk-component-buttons'
  styles: 'shared-list-demo'
---

# Click tracker

`ClickTracker` is a utility component to add analytics click tracking to a component.

## Install

<InstallSnippet packageJson={packageJson} />

## Components

#### ClickTracker

The `ClickTracker` component assumes a couple of things about its child components and how the analytics track call should be made.

**Trackable elements**
- Elements with the attributes `data-trackable` or `data-trackable-selection` are trackable.

**Track call**
- It assumes that the track call should be formatted as `{ platform: "web", product: "your-app-name", selection: "What was clicked" }`.

**Selection value**
- It uses the value of the `data-trackable-selection` attribute.
- It uses the element's text if the `data-trackable-selection` property is not present.
- If the `data-trackable-group` attribute is present, it formats the `selection` as `"group > selection"`.

#### Demo

*Note: To see the track calls, inspect the javascript console.*

```javascript
import ClickTracker from '@xo-union/tk-component-analytics/lib/click-tracker';
```

<Demo ignoreProps={['className']}>
  <ClickTracker analytics={{ track: ::console.log }} product="fashion" eventName="Demo Event">
    <ul className={styles['list-demo']}>
      <li>
        <Button data-trackable>I am trackable, and my `selection` value is assumed from my text</Button>
      </li>
      <li>
        <Button data-trackable-selection="Override selection">I am trackable, and my `selection` value is overriden</Button>
      </li>
      <li>
        <Button data-trackable-group="Group" data-trackable-selection="Override selection">I am trackable, and I belong to a group</Button>
      </li>
      <li>
        <Button>I am not trackable</Button>
      </li>
    </ul>
  </ClickTracker>
</Demo>
