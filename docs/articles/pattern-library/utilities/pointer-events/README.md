---
$imports:
  Demo: '@components/Demo'
  InstallSnippet: '@components/InstallSnippet'
  pointerEventsCss: '@xo-union/tk-css-utilities/lib/pointer-events'
  packageJson: '@xo-union/tk-css-utilities/package.json'
---
# Pointer events

This is a CSS Module. Check the [getting started with CSS Modules](/pattern-library/getting-started/css-modules) section to learn more.

<InstallSnippet packageJson={packageJson} />

## disable-children-pointer-events


`disable-children-pointer-events` is a container which acts as a receiver of its children's interaction events (such as clicks, hovers, etc.) It accomplishes this by disabling pointer events (via the [`pointer-events: none`](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events?v=control) CSS property) for any of its children.

In the following example, we disable the anchor pointing to [www.theknot.com](www.theknot.com) with this module.

<Demo cssDependencies={{pointerEventsCss}}>
  <div className={pointerEventsCss['disable-children-pointer-events']}>
    <a href="http://www.theknot.com">I do not work</a>
  </div>
</Demo>
