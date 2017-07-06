# CSS Modules

Learn more about [CSS Modules](https://github.com/css-modules/css-modules)

## Javascript

In javascript, you can import CSS Modules via the following syntax. However, don't use this if you need to combine classes. In those scenarios, prefer the `composes` CSS syntax specified in the CSS Section.

```javascript
import typographyCSS from '@xo-union/tk-css-typography';
```

## CSS

In CSS, you can compose any of the classes in this module using the following snippet. This is the preferred way of consuming these CSS modules, especially when they need to be combined with other CSS modules.

```css
.my-class {
  composes: sans-serif font-down-2 from '@xo-union/tk-css-typography';
}
```
