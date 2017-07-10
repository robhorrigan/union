---
$imports:
  spacing: '@xo-union/tk-css-spacing'
  packageJson: '@xo-union/tk-css-spacing/package.json'

  BoxDemo: './demos/BoxDemo'
  InstallSnippet: '@components/InstallSnippet'
---

# Spacing

This is a CSS Module. Check the [getting started with CSS Modules](/pattern-library/getting-started/css-modules) section to learn more.


<BoxDemo />


## Install

<InstallSnippet packageJson={packageJson} />

## Usage

The spacing modules follow a predictable naming convention. The pattern is as follows:

`{property}{direction}-{breakpoint}-{scale}`

| Section | Definition |
|---------|------------|
| property | `m`: margin, `p`: padding |
| direction | `l`: left, `r`: right, `t`: top, `b`: bottom, `x`: left & right, `y`: top & bottom -- Will apply to all if not specified |
| breakpoint | `sm`, `md`, `lg`, `xl` -- Will apply to all if not specified |
| scale | See demo at the top. You can also use `auto` |


### Class composition example

```css
.my-class {
  composes: mb-up-2 mb-md-up-4 from '@xo-union/tk-css-spacing';
}
```
### Variable example

```css
@value ( var-sp-up-2, var-sp-down-2 ) from '@xo-union/tk-css-spacing';

.link:hover {
  margin-top: var-sp-up-2;
  height: var-sp-down-2;
}
```

#### Important note on immutability

Note: all utility classes are immutable. This means that you cannot combine them with rules that would otherwise override them. For example, the following is not recommended (partly because it will not work).

```css
@value ( var-sp-up-3 ) from '@xo-union/tk-css-spacing';

.my-class {
  composes: mb-up-2 from '@xo-union/tk-css-spacing';
}

.my-class:hover {
  /* This will not work because the mb-up-2 class is immutable */
  margin-bottom: var-sp-up-3;
}
```

When you need a mutable css object, use the spacing variables instead.

```css
@value ( var-sp-up-3, var-sp-up-2 ) from '@xo-union/tk-css-spacing';

.my-class {
  margin-bottom: var-sp-up-2;
}

.my-class:hover {
  margin-bottom: var-sp-up-3;
}
```
