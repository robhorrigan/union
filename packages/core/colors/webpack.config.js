const path = require('path');
const [major, minor, patch] = require('./package.json').version.split(/[.-]/);

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.css'),
  context: __dirname,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
  },
  externals: {
    'css-module-builder': true
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          `a-css?camelize`
        ]
      }
    ]
  }
};
