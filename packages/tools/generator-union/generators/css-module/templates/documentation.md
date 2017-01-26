---
  imports:
    '<%= moduleName %>': '<%= cssModulePackageName %>'
---

# <%= documentationTitle %>

### Install

```
npm install --save <%= cssModulePackageName  %>
```

### Usage

```render jsx
<div className={<%= moduleName %>.<%= componentOrModuleName %>} />
```

### Development

To make changes to this component, go to: `./packages/<%= packageType %>/<%= packageName %>`.

