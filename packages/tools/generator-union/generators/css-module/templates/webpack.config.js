const path = require('path');
const [major] = require('./package.json').version.split(/[.-]/);

const cssQuery = {
  camelize: true,
  scopedNameFormat: `<%= componentOrModuleName %>-${major}-[hash:3]__[local]`
};

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.css'),
  output: {
    filename: 'index.cssm',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    libraryName: ['Union', '<%= moduleName %>']
  },
  externals: {
    'css-module-builder': true
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.css'
    ],
    root: [
      path.resolve(__dirname, 'src')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'a-css',
        query: cssQuery
      }
    ]
  }
};
