const extend = require('extend');
const path = require('path');

const docsPath = path.resolve.bind(null, __dirname, '..', 'docs');
const staticPath = path.resolve.bind(null, __dirname, '..', 'static');
const packagesPath = path.resolve.bind(null, __dirname, '..', 'packages');
const specPath = path.resolve.bind(null, __dirname, '..', 'spec');

exports.default = {
  extensions: [
    '.jsx',
    '.js',
    '.css',
    '.scss',
    '.cssm'
  ],
  alias: {
    '#assets': staticPath('assets'),
    __shared__: packagesPath('pattern-library', '__shared__')
  }
};

exports.testAndDocs = extend(true, {
  alias: {
    /* Allow package references to resolve correctly */
    '@xo-union': packagesPath('pattern-library'),
    /* Facilitate making references to docs src */
    '#docs': docsPath('src'),
    /* Facilitate making references to articles and config in docs app */
    $articles: docsPath('articles-directory.config.json'),
    '#spec': specPath('browser'),
    '$site-config': docsPath('site.config.json')
  }
}, exports.default);

exports.loaders = {
  modules: [
    'custom-loaders',
    'node_modules'
  ]
};
