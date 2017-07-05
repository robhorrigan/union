import { resolve } from 'path';
import { DefinePlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { resolveTestAndDocs } from './webpack/resolve';
import { docs as cssRules } from './webpack/css-rules';
import articlesRuleList from './webpack/articles-rule-list';

const patternDocsPath = resolve.bind(null, __dirname, 'docs');
const extract = new ExtractTextPlugin({
  filename: 'styles-[hash:6].css',
  ignoreOrder: true
});

export default {
  context: patternDocsPath(),
  entry: ['prismjs', './src/index.jsx'],
  output: {
    filename: './index-[hash:6].js',
    path: resolve(__dirname, 'public', 'docs'),
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
  resolve: resolveTestAndDocs,
  module: {
    rules: [
      {
        test: /\.s?cssm?$/,
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
      },
      {
        test: /\.scss$/,
        use: 'sass-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true
  }
};
