const path = require('path');
const major = require('./package.json').version.split(/[.-]/)[0];

const A_CSS_LOADER = `a-css?camelize&scopedNameFormat=bs-${major}-[hash:3]__[local]&mode=local`;
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    tk_reboot: './tk_reboot.scss',
    grid: './grid.scss',
    navbar: './navbar.scss',
    nav: './nav.scss',
    tables: './tables.scss',
    utilities: './utilities.scss'
  },
  output: {
    filename: '[name].cssm',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    libraryName: ['Union', 'Bootstrap', '[name]']
  },
  resolve: {
    root: [
      path.resolve(__dirname, 'src')
    ]
  },
  externals: {
    'css-module-builder': true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          A_CSS_LOADER,
          'sass'
        ]
      }
    ]
  }
};
