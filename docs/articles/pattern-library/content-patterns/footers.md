---
$imports:
  'FooterNav': '@xo-union/tk-component-footer-nav'
  packageJson: '@xo-union/tk-component-footer-nav/package.json'
  '{ InstallSnippet, Demo, PropTypesTable }': '#docs/doc-components'
  '{ Snippet }': '#docs/doc-components'
---

<h1>{$props.title}</h1>

### Footer Nav

<InstallSnippet packageJson={packageJson} />

### Import

```javascript
import FooterNav from '@xo-union/tk-component-footer-nav';
```

<Demo>
  <FooterNav />
</Demo>
