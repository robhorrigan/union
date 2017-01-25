const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const A_CSS_LOADER = 'a-css?camelize';
const ARTICLES_DIR_CONFIG_PATH = require.resolve('./articles-directory.config.json');

module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    filename: './index.js',
    path: path.join(__dirname, 'build')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: './index.html'
    })
  ],
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    root: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'content')
    ],
    alias: {
      '$articles': ARTICLES_DIR_CONFIG_PATH,
      '$config': require.resolve('./site.config.json')
    }
  },
  module: {
    loaders: [
      {
        /*
         * Directory loader should be closer to the top since it doesn't do any parsing
         * The parsing is left to any loader towards the bottom which matchins the
         * directory config file name
         * */
        test: ARTICLES_DIR_CONFIG_PATH,
        loader: 'directory'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: ['node_modules']
      },
      {
        test: /\.css$/,
        loaders: [ 'style', A_CSS_LOADER ]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack'
        ]
      },
      {
        test: /\.json/,
        loader: 'json'
      },
      {
        test: /\.md$/,
        loaders: [ 'babel', 'mdjsx-loader' ]
      },
      {
        test: [
          require.resolve('@union/bootstrap'),
          require.resolve('@union/bootstrap/lib/grid'),
          require.resolve('@union/bootstrap/lib/navbar'),
          require.resolve('@union/bootstrap/lib/nav'),
          require.resolve('@union/bootstrap/lib/utilities'),
          require.resolve('@union/bootstrap/lib/tables'),
          require.resolve('@union/typography'),
          require.resolve('@union/field-styles')
        ],
        loader: 'style'
      }
    ]
  }
};
