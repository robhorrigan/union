---
$imports:
  type: '@xo-union/tk-css-typography'
  colors: '@xo-union/tk-css-colors'
  Demo: '@components/Demo'
  InstallSnippet: '@components/InstallSnippet'
  packageJson: '@xo-union/tk-css-typography/package.json'
  GlobalsTable: './GlobalsTable'
  'FontScale, { FontScaleTable }': './FontScale'
---

# Typography

This is a CSS Module. Check the [getting started with CSS Modules](/pattern-library/getting-started/css-modules) section to learn more.

<InstallSnippet packageJson={packageJson} />

## Globals

<div className={colors['fg-gray-4']}>
  <h1>h1. header</h1>
  <h2>h2. header</h2>
  <h3>h3. header</h3>
  <h4>h4. header</h4>
  <h5>h5. header</h5>
  <h6>h6. header</h6>
  <p>paragraph</p>
</div>

<GlobalsTable />

## Header line height

Base line height is 1.55, however the header line height (1.25) can be applied with `lh-header`.

```css
.my-component {
  composes: lh-header from '@xo-union/tk-css-typography';
}
```
## Font families

<ul>
  <div className={type.serifMed}>Tisa Medium (font-weight: 500)</div>
  <div className={type.serifLight}>Tisa Light (font-weight: 300)</div>
  <div className={type.sansSerif}>Tisa Sans (font-weight: 400, default face)</div>
</ul>


| class | font-family | weight |
|-------|-------------|--------|
|serif-med|tisa |500|
|serif-light|tisa |300|
|sans-serif|tisa-sans |400|

## Modular scale

Our root font size is `16px` which corresponds to `1rem`.

The modular font scale uses a ratio of `1.125 / 8:9`.

There are utility classes to go up 10, and down 5. Such as `type['font-up-3']` or `type['font-down-1']`

<FontScale />

#### Scale definition

<FontScaleTable />


## Variable example

All exported variables follow the naming convention of: `var-fs-{scale-name}`.

```css
@value ( var-fs-up-1 ) from '@xo-union/tk-css-typography';

.link:hover {
  font-size: var-fs-up-1;
}
```

## Class composition example

All exported classes follow the naming convention of: `font-{breakpoint}-{scale-name}` where the `breakpoint` is optional. 

```css
.my-class {
  composes: font-up-1 font-sm-up-2 font-md-up-3 sans-serif from '@xo-union/tk-css-typography';
}
```

## Note on custom headers

The typography package also exports header classes. These are helpful when you need text to look like a header, without opting in to use the `h*` elements. Be mindful that the `.h*` classes use `rem`s instead of `em`s.

```css
.my-custom-header {
  composes: h1 from '@xo-union/tk-css-typography';
}
```

## Important note on immutability

All font-scale (`font-{scale-name}`) utility classes are immutable. This means that you cannot combine them with rules that would otherwise override them. For example, the following is not recommended (partly because it will not work).

```css
@value ( var-fs-up-3 ) from '@xo-union/tk-css-typography';

.my-class {
  composes: font-up-2 from '@xo-union/tk-css-typography';
}

.my-class:hover {
  /* This will not work because the font-up-2 class is immutable */
  font-size: var-fs-up-3;
}
```

When you need a mutable css object, use the spacing variables instead.

```css
@value ( var-fs-up-3, var-fs-up-2 ) from '@xo-union/tk-css-typography';

.my-class {
  font-size: var-fs-up-2;
}

.my-class:hover {
  font-size: var-fs-up-3;
}
```
