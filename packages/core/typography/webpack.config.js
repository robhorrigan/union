const path = require('path');
const major = require('./package.json').version.split(/[.-]/)[0];

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.scss'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd'
  },
  externals: {
    'css-module-builder': true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          `a-css?camelize&scopedNameFormat=typ-${major}-[hash:3]__[local]&mode=local`,
          'postcss-loader',
          'sass'
        ]
      }
    ]
  }
};
