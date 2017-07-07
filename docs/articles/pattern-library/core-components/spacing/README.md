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

### Variable example

```css
@value ( spacing-up-2, spacing-down-2 ) from '@xo-union/tk-css-spacing/lib/variables';

.link:hover {
  margin-top: spacing-up-2;
  height: spacing-down-2;
}
```

### Class composition example

```css
.my-class {
  composes: mb-up-2 mb-md-up-4 from '@xo-union/tk-css-spacing';
}
```

#### Important note on immutability

Note: all utility classes are immutable. This means that you cannot combine them with rules that would otherwise override them. For example, the following is not recommended (partly because it will not work).

```css
@value ( spacing-up-3 ) from '@xo-union/tk-css-spacing/lib/variables';

.my-class {
  composes: mb-up-2 from '@xo-union/tk-css-spacing';
}

.my-class:hover {
  /* This will not work because the mb-up-2 class is immutable */
  margin-bottom: spacing-up-3;
}
```

When you need a mutable css object, use the spacing variables instead.

```css
@value ( spacing-up-3, spacing-up-2 ) from '@xo-union/tk-css-spacing/lib/variables';

.my-class {
  margin-bottom: spacing-up-2;
}

.my-class:hover {
  margin-bottom: spacing-up-3;
}
```
