const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const ARTICLES_DIR_CONFIG_PATH = require.resolve('./articles-directory.config.json');

module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    filename: './index.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: './index.html'
    })
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.cssm'
    ],
    modules: [
      path.resolve(__dirname, 'src'), 'node_modules'
    ],
    alias: {
      '@xo-union': path.resolve(__dirname, '..', 'pkgs'),
      '#': path.resolve(__dirname, '..', 'src'),
      '$articles': ARTICLES_DIR_CONFIG_PATH,
      '$config': require.resolve('./site.config.json')
    }
  },
  module: {
    rules: [
      {
        /*
         * Directory loader should be closer to the top since it doesn't do any parsing
         * The parsing is left to any loader towards the bottom which matches the
         * directory config file name
         * */
        test: ARTICLES_DIR_CONFIG_PATH,
        use: 'directory-loader'
      },
      {
        test: /\.cssm?$/,
        use: 'style-loader'
      },
      {
        test: /\.css$/,
        use: {
          loader: 'a-css-loader',
          options: {
            camelize: true
          }
        }
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader:'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[hash].[ext]',
            }
          },
          'image-webpack-loader'
        ]
      },
      {
        test: /\.json/,
        use: 'json-loader'
      },
      {
        test: /\.md$/,
        use: [ 'babel-loader', 'mdjsx-loader' ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
