const path = require('path');
const externalizeRequires = require('./build-utils/externalize-requires');
const cssRules = require('./build-utils/css-rules');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    /* Bootstrap */
    'bootstrap/css/grid.cssm': './bootstrap/css/grid.scss',
    'bootstrap/css/nav.cssm': './bootstrap/css/nav.scss',
    'bootstrap/css/reboot.cssm': './bootstrap/css/reboot.scss',
    'bootstrap/css/tables.cssm': './bootstrap/css/tables.scss',
    'bootstrap/css/utilities.cssm': './bootstrap/css/utilities.scss',
    /* Colors */
    'colors/css/index.cssm': './colors/css/index.css',
    /* Icons */
    'icons/css/index.cssm': './icons/css/index.js',
    /* Type */
    'typography/css/index.cssm': './typography/css/index.scss',
    'typography/css/globals.cssm': './typography/css/globals.scss',
    /* Fields */
    'fields/css/index.cssm': './fields/css/index.scss',
    'fields/components/index.js': './fields/components/index.js',
  },
  output: {
    path: path.join(__dirname, 'pkgs'),
    filename: '[name]',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [
      '.jsx',
      '.js',
      '.css',
      '.scss'
    ],
    modules: [
      path.resolve(__dirname, 'src'), 'node_modules'
    ]
  },
  externals: [
    externalizeRequires([
      /^@union/,
      'react',
      'css-module-builder'
    ])
  ],
  module: {
    rules: [
      cssRules,
      {
        test: /\.jsx?/,
        use: 'babel-loader'
      },
      {
        test: /\.scss/,
        use: 'sass-loader'
      }
    ]
  }
};
