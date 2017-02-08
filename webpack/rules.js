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
  }
];

