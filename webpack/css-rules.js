const rebootCSSPath = require.resolve('../pattern-library/src/bootstrap/reboot.scss');
const { typographyRules, typographyGlobalsPath } = require('./typography-rules');

exports.default = {
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

const prismTheme = require.resolve('prism-themes/themes/prism-ghcolors.css');

exports.docs = {
  test: /\.cssm?$/,
  rules: [
    /**
      * Apply style-loader to all .css and .cssm files.
      */
    { use: 'style-loader' },
    /**
      * Apply a-css-loader only to .css files.
      * Use 'local' (not pure) mode for prism theme.
      */
    {
      test: /\.css$/,
      rules: [
        {
          exclude: prismTheme,
          use: {
            loader: 'a-css-loader',
            options: {
              camelize: true
            }
          }
        },
        {
          include: prismTheme,
          use: {
            loader: 'a-css-loader',
            options: {
              mode: 'global'
            }
          }
        }
      ]
    }
  ]
};
