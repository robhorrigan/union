const extend = require('extend');
const path = require('path');

const srcPath = path.resolve.bind(null, __dirname, '..', 'src');
const staticPath = path.resolve.bind(null, __dirname, '..', 'static');
const packagesPath = path.resolve.bind(null, __dirname, '..', 'packages');

exports.default = {
  extensions: [
    '.jsx',
    '.js',
    '.css',
    '.scss',
    '.cssm'
  ],
  alias: {
    /* Facilitate making references to files in the source root */
    '#': srcPath('pattern-library'),
    '#assets': staticPath('assets')
  }
};

exports.testAndDocs = extend(true, {
  alias: {
    /* Allow package references to resolve correctly */
    '@xo-union': packagesPath('pattern-library'),
    /* Facilitate making references to docs src */
    '#docs': srcPath('pattern-library-docs', 'src'),
    /* Facilitate making references to articles and config in docs app */
    $articles: srcPath('pattern-library-docs', 'articles-directory.config.json'),
    '$site-config': srcPath('pattern-library-docs', 'site.config.json')
  }
}, exports.default);

exports.loaders = {
  modules: [
    'custom-loaders',
    'node_modules'
  ]
};
