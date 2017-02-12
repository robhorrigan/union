const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const externalizeRequires = require('./build-utils/externalize-requires');
const { buildEntrypoints } = require('./build-utils/entrypoints');
const rules = require('./webpack/patterns-rules');
const resolve = require('./webpack/resolve');

const patternSrcPath = path.resolve.bind(null, __dirname, 'pattern-library', 'src');

module.exports = {
  resolve: resolve.default,
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
      'css-module-builder'
    ])
  ],
  module: { rules },
  plugins: [
    new webpack.DefinePlugin({
      ENV: 'process.env.NODE_ENV'
    })
  ]
};
