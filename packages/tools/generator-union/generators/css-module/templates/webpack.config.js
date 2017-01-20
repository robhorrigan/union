const path = require('path');
const [major] = require('./package.json').version.split(/[.-]/);


const cssQuery = {
  camelize: true,
  scopedNameFormat: `<%= moduleAbbreviatedName %>-${major}-[hash:3]__[local]`
};

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.scss'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    libraryName: ['Union', '<%= moduleName %>']
  },
  externals: {
    'css-module-builder': true
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'a-css,
        query: cssQuery
      }
    ]
  }
};
