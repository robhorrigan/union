const path = require('path');
const [major, minor, patch] = require('./package.json').version.split(/[.-]/);

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
          `a-css?camelize&scopedNameFormat=typ-${major}_${minor}_${patch}-[hash:3]__[local]&mode=local`,
          'postcss-loader',
          'sass'
        ]
      }
    ]
  }
};
