const cssRules = require('./css-rules').default;
const fontRules = require('./typography-rules').typographyFontsRules;
const iconRules = require('./icon-rules');

module.exports = [
  cssRules,
  fontRules,
  iconRules,
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
