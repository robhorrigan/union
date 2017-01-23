const path = require('path');
const v = require('./package.json').version.replace(/\./g, '_');
const webpack = require('webpack');

const cssQuery = {
  camelize: true,
  scopedNameFormat: `ff-${v}--[hash:3]__[local]`
}

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.css'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'lib'),
    libraryTarget: 'umd',
    library: ['XO', 'FormFields', 'Styles']
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.css',
      '.scss'
    ],
    root: [
      path.resolve(__dirname, 'src')
    ]
  },
  externals: {
    "@union/typography": true,
    "@union/icons": true,
    "@union/colors": true,
    "css-module-builder": true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'a-css-loader?' + JSON.stringify(cssQuery),
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'a-css-loader?' + JSON.stringify(cssQuery)
        ]
      }
    ]
  }
};
