# mdjsx-loader

> A markdown loader with embedded jsx

### Rationale

We wanted an expressive way to write markdown documentation for a react style-guide.

### Configuration

Add this loader to your preferred filetypes. We use the `.md` extension.

```javascript
// In webpack.config.js

module.exports = {
  /* Omitted */
  module: {
    loaders: [
      {
        test: /\.md$/,
        loaders: ['babel', 'mdjsx']
      }
    ]
  }
}

```

> Notice the dependency on the `babel` loader. That is because the `mdjsx` loader creates an es6 module with jsx syntax.

### Import
> `mdjsx-loader` exports two values.

```javascript
import Component, { attributes } from 'my-md-file.md';

Component // a react component which includes the compiled markdown and react components
attributes // the front-matter attributes from the markdown file
```

### Syntax

> `$imports` special front-matter attributes allows you to import any javascript module

```markdown
---
$imports:
  '{ A, B }': 'module1'
  '* as C': 'module2'
  D: 'module3'
---

### My title

Use imported react components

<A>
  <D />
  <C.X>
    Hello there
  </C.X>
</A>
```

> `$attributes` special variable gives you access to all front-matter attributes (except for the $imports)
 
```markdown
---
propA: 'Hello World'
---

### My title

Use front-matter attributes

<span>{$attributes.propA}</span>
```

> `$props` special variable gives you access to the component props.

***in md file***
```markdown
# Hello world
<span>{$props.content}</span>
```

***consumer***

```javascript
import Component from 'my-md-file.md';
import ReactDom from 'react-dom';

ReactDom.render(
  document.getElementById('root'),
  <Component content="This will be interpolated in span" />
)
```
