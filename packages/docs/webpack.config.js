const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const A_CSS_LOADER = 'a-css?camelize';
const ARTICLES_DIR_CONFIG_PATH = require.resolve('./articles-directory.config.json');

const EXTERNALS_CSS_MODULES_PATHS = require('./external-cssmodules.json').map((path) => {
  return require.resolve(path);
});

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
         * The parsing is left to any loader towards the bottom which matches the
         * directory config file name
         * */
        test: ARTICLES_DIR_CONFIG_PATH,
        loader: 'directory'
      },
      {
        /*
         *  Tell webpack to parse these external modules as css
         * */
        test: EXTERNALS_CSS_MODULES_PATHS,
        loader: 'style'
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
        loaders: [ 'babel', 'markdown-react' ]
      }
    ]
  }
};
