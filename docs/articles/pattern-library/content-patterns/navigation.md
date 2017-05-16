---
$imports:
  'HeaderNavAnalytics': '@xo-union/tk-component-header-nav/lib/analytics'
  'HeaderNav': '@xo-union/tk-component-header-nav'
  packageJson: '@xo-union/tk-component-header-nav/package.json'
  '{ InstallSnippet, Demo, PropTypesTable }': '#docs/doc-components'
  HeaderNavMetadata: '!!react-docgen-loader!@xo-union/tk-component-header-nav/src/components/HeaderNav'
  HeaderNavAnalyticsMetadata: '!!react-docgen-loader!@xo-union/tk-component-header-nav/src/components/HeaderNavAnalytics'
  '{ Snippet }': '#docs/doc-components'
---

<h1>{$props.title}</h1>

### Header Nav

<InstallSnippet packageJson={packageJson} />

### Import

```javascript
import HeaderNav from '@xo-union/tk-component-header-nav';
import HeaderNavAnalytics from '@xo-union/tk-component-header-nav/lib/analytics';
```


### States

#### Logged out

<Demo>
  <HeaderNav />
</Demo>

#### Logged in

<Demo>
  <HeaderNav loggedIn />
</Demo>

### Properties

<PropTypesTable metadata={HeaderNavMetadata.props} />

### With Analytics

### Properties

This demo suppresses redirects and logs all track data to the javascript console. In a normal scenario, track calls are made using segment's `analytics.track`.

<Demo ignoreProps={['analytics', 'followStrategy']}>
  <HeaderNavAnalytics product="fashion" analytics={{ track(...params) { console.log('TRACK:', ...params)} }} followStrategy={false}>
    <HeaderNav />
  </HeaderNavAnalytics>
</Demo>

<PropTypesTable metadata={HeaderNavAnalyticsMetadata.props} />
