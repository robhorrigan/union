const path = require('path');
const webpack = require('webpack');
const externalizeRequires = require('./scripts/helpers/externalizeRequires');
const { buildEntrypoints } = require('./scripts/helpers/buildEntrypoints');
const rules = require('./webpack/patterns-rule-list');
const resolve = require('./webpack/resolve');

const patternPackagesPath = path.resolve.bind(null, __dirname, 'packages', 'pattern-library');

module.exports = {
  resolve: resolve.default,
  resolveLoader: resolve.loaders,
  context: patternPackagesPath(),
  entry: buildEntrypoints({
    context: patternPackagesPath(),
    srcDirectory: 'src',
    distDirectory: 'lib'
  }),
  output: {
    path: patternPackagesPath(),
    filename: '[name]',
    libraryTarget: 'umd'
  },
  externals: [
    externalizeRequires([
      /^@xo-union/,
      'react',
      'prop-types',
      'css-module-builder',
      'core-decorators',
      'matches-selector',
      '@segment/is-meta',
      /^xojs/
    ])
  ],
  module: { rules },
  plugins: [
    new webpack.DefinePlugin({
      ENV: 'process.env.NODE_ENV'
    })
  ]
};
