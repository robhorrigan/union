const path = require('path');
const cssRules = require('./css-rules').default;

module.exports = [
  cssRules,
  {
    test: /\.jsx?/,
    use: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.scss/,
    use: 'sass-loader'
  },
  {
    test: /\.woff2?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: '/[name]-[hash:3].[ext]',
          publicPath: '//static.xoedge.com/union/fonts',
          outputPath: path.join('..', '..', 'public', 'fonts')
        }
      }
    ]
  }
];

