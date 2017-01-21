const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'lib'),
    libraryTarget: 'umd',
    libraryName: ['Union', '<%= moduleName %>']
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
    react: 'React'
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
