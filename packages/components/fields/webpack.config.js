const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'lib'),
    libraryTarget: 'umd',
    libraryName: ['Union', 'Fields']
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
    '@union/fields-css': true,
    '@union/bootstrap/lib/grid': true,
    '@union/bootstrap/lib/utilities': true,
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
