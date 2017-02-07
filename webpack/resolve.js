const extend = require('extend');
const path = require('path');

const patternLibPath = path.resolve.bind(null, __dirname, '..', 'pattern-library');
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
    '#': patternLibPath('src')
  }
};

exports.testAndDocs = extend(true, {
  alias: {
    /* Allow package references to resolve correctly */
    '@xo-union': packagesPath('pattern-library'),
    /* Facilitate making references to docs src */
    '#docs': patternLibPath('docs', 'src'),
    /* Facilitate making references to articles and config in docs app */
    '$articles': patternLibPath('docs', 'articles-directory.config.json'),
    '$site-config': patternLibPath('docs', 'site.config.json')
  }
}, exports.default);
