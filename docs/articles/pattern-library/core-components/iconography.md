---
$imports:
  'IconsDemo': '#docs/demos/Icons'
  'packageJson': '@xo-union/tk-component-icons/package.json'
  '{ Snippet, Demo, PropTypesTable, InstallSnippet }': '#docs/doc-components'
  PropTypesTableMetadata: '!!react-docgen-loader!#docs/doc-components/PropTypesTable'
  SnippetsMetadata:       '!!react-docgen-loader!#docs/doc-components/Snippet'
  DemoMetadata:           '!!react-docgen-loader!#docs/doc-components/Demo'
---

<h1>{$props.title}</h1>

## Install

<InstallSnippet packageJson={packageJson} />

## Setup

Call init some where early in the process of your front end application. Init fetches the current version
of the icons assets and installs it in the browser. It uses `localStorage` to store the assets. Each asset
version is cached for 30 days.

```javascript
import { init } from '@xo-union/tk-component-icons/lib/setup';

init();
```

## Import

```javascript
import Icon from '@xo-union/tk-component-icons';
```

## Demos

<IconsDemo />

# Build for production

By default. This library includes an embedded version of the icons svg. This allows us to have a reliable
development experience because there is no expernal service dependency. However, this is not ideal for production.
In production, you want to take advantage of the union CDN to download and cache the icon assets.

To enable the production build, add the following to your webpack build.


```javascript
const { DefinePlugin } = require('webpack');
module.exports = {
  /* ... ommitted */
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
      // If you want this to be dynamic, based on actual environment variables
      // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
```

