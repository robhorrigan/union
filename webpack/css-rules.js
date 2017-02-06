const rebootCSSPath = require.resolve('../src/bootstrap/css/reboot.scss');
const { typographyRules, typographyGlobalsPath } = require('./typography-rules');

module.exports = {
  test: /\.s?css/,
  rules: [
    {
      include: [rebootCSSPath, typographyGlobalsPath],
      use: {
        loader: 'a-css-loader',
        options: {
          mode: 'local'
        }
      }
    },
    {
      exclude: [rebootCSSPath, typographyGlobalsPath],
      use: 'a-css-loader'
    },
    ...typographyRules
  ]
};
