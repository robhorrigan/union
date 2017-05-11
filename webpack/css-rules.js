import {
  typographyCssRules,
  typographyGlobalsPath,
  typographyFontsPath
} from './typography-rules';

const rebootCSSPath = require.resolve('../packages/@xo-union/tk-css-bootstrap/src/reboot.scss');

export default {
  test: /\.s?css$/,
  rules: [
    {
      include: [rebootCSSPath, typographyGlobalsPath],
      exclude: [typographyFontsPath],
      use: {
        loader: 'a-css-loader',
        options: {
          mode: 'local',
          camelize: true
        }
      }
    },
    {
      exclude: [rebootCSSPath, typographyGlobalsPath, typographyFontsPath],
      use: {
        loader: 'a-css-loader',
        options: {
          camelize: true
        }
      }
    },
    ...typographyCssRules
  ]
};

const prismTheme = require.resolve('prism-themes/themes/prism-ghcolors.css');

/**
* Apply a-css-loader only to .css files.
* Use 'local' (not pure) mode for prism theme.
*/
export const docs = {
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
};
