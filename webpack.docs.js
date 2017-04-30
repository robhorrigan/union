const path = require('path');
const { DefinePlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const resolve = require('./webpack/resolve');
const cssRules = require('./webpack/css-rules').docs;
const articlesRuleList = require('./webpack/articles-rule-list');

const patternDocsPath = path.resolve.bind(null, __dirname, 'docs');
const extract = new ExtractTextPlugin({
  filename: 'styles-[hash:6].css',
  ignoreOrder: true
});

module.exports = {
  context: patternDocsPath(),
  entry: ['prismjs', './src/index.jsx'],
  output: {
    filename: './index-[hash:6].js',
    path: path.resolve(__dirname, 'public', 'docs'),
    publicPath: '/',
    pathinfo: true
  },
  plugins: [
    extract,
    new HTMLWebpackPlugin({
      template: patternDocsPath('src', 'index.html'),
      filename: 'index.html'
    }),
    /* Use the same file for 404s to allow application to handle unknown routes */
    new HTMLWebpackPlugin({
      template: patternDocsPath('src', 'index.html'),
      filename: '404.html'
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: resolve.testAndDocs,
  module: {
    rules: [
      {
        test: /\.cssm?$/,
        issuer: /\.(jsx?|md)$/,
        rules: extract.extract({
          use: []
        })
      },
      cssRules,
      ...articlesRuleList,
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
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
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
