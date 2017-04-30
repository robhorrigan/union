---
$imports:
  spacing: '@xo-union/utilities/lib/spacing'
  type: '@xo-union/typography'
  '{ Demo, Snippet, PropTypesTable, InstallSnippet }': '#docs/doc-components'
---

<h1 className={spacing.mb4}>{$props.title}</h1>

<h1>h1. heading</h1>
<h2>h2. heading</h2>
<h3>h3. heading</h3>
<h4>h4. heading</h4>
<h5>h5. heading</h5>
<h6>h6. heading</h6>

<div className={spacing.mt5}></div>

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
  <li>
    <Demo cssDependencies={{ type }}>
      <div className={type.sansSerifMed}>Tisa Sans Medium (font-weight: 500, default face)</div>
    </Demo>
  </li>
</ul>

<div className={spacing.mt5}></div>

<p>
  Our root font size is
  <Snippet lang="css" inline>16px</Snippet>
  which corresponds to
  <Snippet lang="css" inline>1rem</Snippet>
</p>

<p>
  The modular font scale uses a ratio of
  <Snippet inline>1.125 / 8:9</Snippet>
  There are utility classes to go up 10, and down 5. Such as
  <Snippet lang="javascript" inline>type.fontUp3</Snippet>
  or
  <Snippet lang="javascript" inline>type.fontDown1</Snippet>
</p>

<div className={type.fontUp10}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontUp10</Snippet></p>

<div className={type.fontUp9}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontUp9</Snippet></p>

<div className={type.fontUp8}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontUp8</Snippet></p>

<div className={type.fontUp7}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontUp7</Snippet></p>

<div className={type.fontUp6}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontUp6</Snippet></p>

<div className={type.fontUp5}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontUp5</Snippet></p>

<div className={type.fontUp4}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontUp4</Snippet></p>

<div className={type.fontUp3}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontUp3</Snippet></p>

<div className={type.fontUp2}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontUp2</Snippet></p>

<div className={type.fontUp1}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontUp1</Snippet></p>

<div className={type.fontUp0}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontUp0</Snippet></p>

Root size / 16px / 1rem

<div className={type.fontDown1}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontDown1</Snippet></p>

<div className={type.fontDown2}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontDown2</Snippet></p>

<div className={type.fontDown3}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontDown3</Snippet></p>

<div className={type.fontDown4}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontDown4</Snippet></p>

<div className={type.fontDown5}>Pack my box with five dozen liquor jugs</div>
<p><Snippet inline>fontDown5</Snippet></p>

<div className={spacing.mt5}></div>

<p>
  Base line height is 1.55, however the header line height (1.25) can be applied with
  <Snippet inline>type.lhHeader</Snippet>
</p>

<Demo cssDependencies={{ type }}>
  <div className={type.lhHeader}>1234567890</div>
</Demo>
