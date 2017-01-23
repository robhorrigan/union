const path = require('path');
const [major, minor, patch] = require('./package.json').version.split(/[.-]/);

const A_CSS_LOADER = `a-css?camelize&scopedNameFormat=bs-${major}_${minor}_${patch}-[hash:3]__[local]&mode=local`;
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    reboot: './reboot.scss',
    grid: './grid.scss',
    navbar: './navbar.scss',
    nav: './nav.scss',
    utilities: './utilities.scss'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    libraryName: ['XO', 'Union', 'Bootstrap', '[name]']
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
      },
      {
        test: /\.css$/,
        loaders: [
          A_CSS_LOADER
        ]
      }
    ]
  }
};
