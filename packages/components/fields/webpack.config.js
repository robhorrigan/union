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
    '@union/fields-css': {
      commonjs: '@union/fields-css',
      commonjs2: '@union/fields-css',
      amd: '@union/fields-css',
      root: ['Union', 'FieldsCss'],
    },
    '@union/bootstrap/lib/grid': {
      commonjs: '@union/bootstrap/lib/grid',
      commonjs2: '@union/bootstrap/lib/grid',
      amd: '@union/bootstrap/lib/grid',
      root: ['Union', 'Bootstrap', 'grid'],
    },
    '@union/bootstrap/lib/utilities': {
      commonjs: '@union/bootstrap/lib/utilities',
      commonjs2: '@union/bootstrap/lib/utilities',
      amd: '@union/bootstrap/lib/utilities',
      root: ['Union', 'Bootstrap', 'utilities'],
    },
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
