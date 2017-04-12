const cssRules = require('./css-rules').default;
const fontRules = require('./typography-rules').typographyFontsRules;

module.exports = [
  cssRules,
  fontRules,
  {
    test: /\.jsx?$/,
    use: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.scss$/,
    use: 'sass-loader'
  }
];
