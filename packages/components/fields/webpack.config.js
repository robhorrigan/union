const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'lib'),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [
      '',
      '.jsx',
      '.js'
    ],
    root: [
      path.resolve(__dirname, 'src')
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    '@union/field-styles': true
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
