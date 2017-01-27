const path = require('path');
const { DefinePlugin } = require('webpack')
const v = require('./package.json').version.replace(/\./g, '_');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.cssm',
    library: ['XO', 'Icons'],
    libraryTarget: 'umd'
  },
  resolve: {
    root: [
      path.resolve(__dirname, 'src')
    ],
    extensions: [
      '',
      '.js',
      '.css'
    ]
  },
  externals: {
    'css-module-builder': true
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          `a-css?camelize&scopedNameFormat=icn-${v}_[hash:3]__[local]`
        ]
      }
    ]
  }
}
