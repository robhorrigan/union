const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    library: 'Union'
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.cssm'
    ]
  },
  externals: {
    react: 'React'
  },
  module: {
    loaders: [
      {
        test: /\.cssm/,
        loader: 'style'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel'
      }
    ]
  }
};
