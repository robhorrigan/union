const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'lib'),
    libraryTarget: 'umd',
    libraryName: ['Union', 'DocUtils']
  },
  resolve: {
    extensions: [
      '',
      '.jsx',
      '.js'
    ]
  },
  externals: {
    '@union/bootstrap/lib/tables': true,
    'jsx-to-string-2': true,
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: ['node_modules'],
        loader: 'babel-loader'
      }
    ]
  }
};
