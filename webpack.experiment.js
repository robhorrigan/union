const path = require('path');
const externalizeRequires = require('./build-utils/externalize-requires');
const rules = require('./webpack/rules');
const resolve = require('./webpack/resolve');

module.exports = {
  resolve,
  context: path.resolve(__dirname, 'pattern-library', 'src'),
  entry: {
    /* Documentation only components */
    'doc-components/index.js': './doc-components/index.js',
    /* Bootstrap */
    'bootstrap/grid.cssm': './bootstrap/grid.scss',
    'bootstrap/nav.cssm': './bootstrap/nav.scss',
    'bootstrap/navbar.cssm': './bootstrap/navbar.scss',
    'bootstrap/reboot.cssm': './bootstrap/reboot.scss',
    'bootstrap/tables.cssm': './bootstrap/tables.scss',
    'bootstrap/utilities.cssm': './bootstrap/utilities.scss',
    /* Colors */
    'colors/index.cssm': './colors/index.css',
    /* Icons */
    'icons/index.cssm': './icons/index.js',
    /* Type */
    'typography/index.cssm': './typography/index.scss',
    'typography/globals.cssm': './typography/globals.scss',
    /* Fields */
    'fields/css/index.cssm': './fields/css/index.scss',
    'fields/components/index.js': './fields/components/index.js',
  },
  output: {
    path: path.join(__dirname, 'pattern-library', 'pkgs'),
    filename: '[name]',
    libraryTarget: 'umd'
  },
  externals: [
    externalizeRequires([
      /^@xo-union/,
      'react',
      'css-module-builder'
    ])
  ],
  module: { rules }
};
