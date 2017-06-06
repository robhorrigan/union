---
$imports:
  'HeaderNav': '@xo-union/tk-component-header-nav'
  'HeaderNavWithSubNavDemo': './demos/HeaderNavWithSubNavDemo'
  packageJson: '@xo-union/tk-component-header-nav/package.json'
  '{ InstallSnippet, Demo, PropTypesTable }': '#docs/doc-components'
  HeaderNavMetadata: '!!react-docgen-loader!@xo-union/tk-component-header-nav/src/components/HeaderNav'
  '{ Snippet }': '#docs/doc-components'
  HeaderNavDemo: './demos/HeaderNavDemo'
---

# Navigation

### Header Nav

> Note: These demos suppress redirects and log all analytics track data to the javascript console. In a normal scenario, track calls are made using segment's `analytics.track`.

<InstallSnippet packageJson={packageJson} />

### Import

```javascript
import HeaderNav from '@xo-union/tk-component-header-nav';
```

### Properties

<PropTypesTable metadata={HeaderNavMetadata.props} exclude={['default']} />

### States

#### Logged out

<HeaderNavDemo />

#### Logged in

<HeaderNavDemo loggedIn />

### Sub Nav

#### Import

```javascript
import HeaderNav, { SubNav, SubNavLinkItem } from '@xo-union/tk-component-header-nav';
```

<HeaderNavWithSubNavDemo />