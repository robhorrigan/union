var remove = require('postcss-remove-rules');
var byebye = require('css-byebye');

module.exports = {
  plugins: [
    byebye({
      rulesToRemove: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'small',
        'mark',
        'a',
        'ul',
        'ol',
        'dl',
        'dt',
        'dd',
        'abbr',
        'blockquote',
        'address',
        /^.+bg.+/,
        /^h1.+/,
        /^h2.+/,
        /^h3.+/,
        /^h4.+/,
        /^h5.+/,
        /^abbr.+/,
        /^blockquote.+/,
        /^h3.+/,
        /^h4.+/,
        /^h5.+/,
        /^h6.+/,
        /^h6.+/,
        /^a.+/,
        /^.+primary$/,
        /^.+success$/,
        /^.+info$/,
        /^.+warning$/,
        /^.+danger$/,
      ]
    })
  ]
};
