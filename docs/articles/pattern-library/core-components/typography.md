---
$imports:
  spacing: '@xo-union/tk-css-utilities/lib/spacing'
  type: '@xo-union/tk-css-typography'
  Demo: '@components/Demo'
  InstallSnippet: '@components/InstallSnippet'
  packageJson: '@xo-union/tk-css-typography/package.json'
---

# Typography

This is a CSS Module. Check the [getting started with CSS Modules](/pattern-library/getting-started/css-modules) section to learn more.

<InstallSnippet packageJson={packageJson} />

## Headings

<Demo>
  <div>
    <h1>h1. heading</h1>
    <h2>h2. heading</h2>
    <h3>h3. heading</h3>
    <h4>h4. heading</h4>
    <h5>h5. heading</h5>
    <h6>h6. heading</h6>
  </div>
</Demo>

## Font Utility Classes

<ul>
  <li>
    <Demo cssDependencies={{ type }}>
      <div className={type.serifMed}>Tisa Medium (font-weight: 500)</div>
    </Demo>
  </li>
  <li>
    <Demo cssDependencies={{ type }}>
      <div className={type.serifLight}>Tisa Light (font-weight: 300)</div>
    </Demo>
  </li>
  <li>
    <Demo cssDependencies={{ type }}>
      <div className={type.sansSerif}>Tisa Sans (font-weight: 400, default face)</div>
    </Demo>
  </li>
</ul>

Our root font size is `16px` which corresponds to `1rem`.

The modular font scale uses a ratio of `1.125 / 8:9`.

There are utility classes to go up 10, and down 5. Such as `type['font-up-3']` or `type['font-down-1']`

<div className={type['font-up-10']}>Pack my box with five dozen liquor jugs</div>
`font-up-10`

<div className={type['font-up-9']}>Pack my box with five dozen liquor jugs</div>
`font-up-9`

<div className={type['font-up-8']}>Pack my box with five dozen liquor jugs</div>
`font-up-8`

<div className={type['font-up-7']}>Pack my box with five dozen liquor jugs</div>
`font-up-7`

<div className={type['font-up-6']}>Pack my box with five dozen liquor jugs</div>
`font-up-6`

<div className={type['font-up-5']}>Pack my box with five dozen liquor jugs</div>
`font-up-5`

<div className={type['font-up-4']}>Pack my box with five dozen liquor jugs</div>
`font-up-4`

<div className={type['font-up-3']}>Pack my box with five dozen liquor jugs</div>
`font-up-3`

<div className={type['font-up-2']}>Pack my box with five dozen liquor jugs</div>
`font-up-2`

<div className={type['font-up-1']}>Pack my box with five dozen liquor jugs</div>
`font-up-1`

<div className={type['font-up-0']}>Pack my box with five dozen liquor jugs</div>
`font-up-0`

Root size / 16px / 1rem

<div className={type['font-down-1']}>Pack my box with five dozen liquor jugs</div>
`font-down-1`

<div className={type['font-down-2']}>Pack my box with five dozen liquor jugs</div>
`font-down-2`

<div className={type['font-down-3']}>Pack my box with five dozen liquor jugs</div>
`font-down-3`

<div className={type['font-down-4']}>Pack my box with five dozen liquor jugs</div>
`font-down-4`

<div className={type['font-down-5']}>Pack my box with five dozen liquor jugs</div>
`font-down-5`

<div className={spacing.mt5}></div>

Base line height is 1.55, however the header line height (1.25) can be applied with `type['lh-header']`

<Demo cssDependencies={{ type }}>
  <div className={type.lhHeader}>1234567890</div>
</Demo>
