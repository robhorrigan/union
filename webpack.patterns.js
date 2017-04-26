const path = require('path');
const webpack = require('webpack');
const externalizeRequires = require('./scripts/helpers/externalizeRequires');
const { buildEntrypoints } = require('./scripts/helpers/buildEntrypoints');
const rules = require('./webpack/patterns-rule-list');
const resolve = require('./webpack/resolve');

const patternSrcPath = path.resolve.bind(null, __dirname, 'src', 'pattern-library');

module.exports = {
  resolve: resolve.default,
  resolveLoader: resolve.loaders,
  context: patternSrcPath(),
  entry: buildEntrypoints({ context: patternSrcPath() }),
  output: {
    path: path.join(__dirname, 'packages', 'pattern-library'),
    filename: '[name]',
    libraryTarget: 'umd'
  },
  externals: [
    externalizeRequires([
      /^@xo-union/,
      'react',
      'prop-types',
      'css-module-builder',
      'core-decorators'
    ])
  ],
  module: { rules },
  plugins: [
    new webpack.DefinePlugin({
      ENV: 'process.env.NODE_ENV'
    })
  ]
};
