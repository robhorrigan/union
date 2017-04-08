---
$imports:
  'HeaderNav': '@xo-union/header-nav'
  packageJson: '@xo-union/header-nav/package.json'
  '{ InstallSnippet, Demo, PropTypesTable }': '#docs/doc-components'
---

<h1>{$props.title}</h1>

### Header Nav

<InstallSnippet packageJson={packageJson} />

#### Logged out

<Demo>
  <HeaderNav loggedIn={false} />
</Demo>

#### Logged in

<Demo>
  <HeaderNav loggedIn />
</Demo>
