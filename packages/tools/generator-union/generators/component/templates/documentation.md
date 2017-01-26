---
  imports:
    '<%= moduleName %>': '<%= packageName %>'
---

# <%= documentationTitle %>

### Install

```
npm install --save <%= packageName  %>
```

### Usage

```render jsx
<<%= moduleName %> />
```

### Development

To make changes to this component, go to: `./packages/components/<%= componentName %>`.

<% if (wantsToCreateCssModule) { %>
To change the css module. go to: `./packages/components/<%= cssModuleName %>`
<% } %>
