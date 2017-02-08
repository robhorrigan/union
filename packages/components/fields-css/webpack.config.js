const path = require('path');
const major = require('./package.json').version.split('.')[0];

const cssQuery = {
  camelize: true,
  scopedNameFormat: `ff-${major}--[hash:3]__[local]`
}

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.scss'),
  output: {
    filename: 'index.cssm',
    path: path.join(__dirname, 'lib'),
    libraryTarget: 'umd',
    library: ['Union', 'FieldsCss']
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.css',
      '.scss'
    ],
    root: [
      path.resolve(__dirname, 'src')
    ]
  },
  externals: {
    "@union/icons": true,
    "@union/colors": true,
    "css-module-builder": true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'a-css-loader?' + JSON.stringify(cssQuery),
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'a-css-loader?' + JSON.stringify(cssQuery)
        ]
      }
    ]
  }
};
