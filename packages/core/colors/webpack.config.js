const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.css'),
  context: __dirname,
  output: {
    filename: 'index.cssm',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    library: ['Union', 'Colors'],
    libraryTarget: 'umd'
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
