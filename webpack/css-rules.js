const rebootCSSPath = require.resolve('../src/bootstrap/reboot.scss');
const { typographyRules, typographyGlobalsPath } = require('./typography-rules');

module.exports = {
  test: /\.s?css$/,
  rules: [
    {
      include: [rebootCSSPath, typographyGlobalsPath],
      use: {
        loader: 'a-css-loader',
        options: {
          mode: 'local',
          camelize: true
        }
      }
    },
    {
      exclude: [rebootCSSPath, typographyGlobalsPath],
      use: {
        loader: 'a-css-loader',
        options: {
          camelize: true
        }
      }
    },
    ...typographyRules
  ]
};
