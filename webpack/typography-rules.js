const path = require('path');
const cssByebye = require('css-byebye');

const typographyPath = path.resolve.bind(
  null, __dirname, '..', 'pattern-library', 'src', 'typography');

const pureModulePath = typographyPath('index.scss');
const globalsPath = typographyPath('globals.scss');
const fontsPath = typographyPath('fonts.scss');

function useRuleRemover(rulesToRemove) {
  return {
    loader: 'postcss-loader',
    options: {
      plugins: () => [cssByebye({ rulesToRemove })]
    }
  };
}

const UseEntries = {
  removeGlobals: useRuleRemover([
    /^h[\dr]/,
    'small',
    'mark'
  ]),
  removeClasses: useRuleRemover([
    /^\..+$/
  ]),
  keepFontFaces: {
    loader: 'a-css-loader',
    options: {
      camelize: true,
      minimize: {
        discardUnused: {
          fontFace: false
        }
      }
    }
  }
};

exports.typographyFontsPath = fontsPath;
exports.typographyGlobalsPath = globalsPath;
exports.typographyCssRules = [
  {
    include: [fontsPath],
    use: UseEntries.keepFontFaces
  },
  {
    include: pureModulePath,
    use: UseEntries.removeGlobals
  },
  {
    include: globalsPath,
    use: UseEntries.removeClasses
  }
];

exports.typographyFontsRules = {
  test: /\.woff2?$/,
  rules: [
    {
      issuer: typographyPath('data', 'data-urls.js'),
      use: 'url-loader'
    },
    {
      issuer: typographyPath('data', 'hosted-urls.js'),
      use: {
        loader: 'file-loader',
        options: {
          name: '/[name]-[hash:3].[ext]',
          publicPath: '//s3.amazonaws.com/xo-union/fonts',
          outputPath: path.join('..', '..', 'public', 'assets', 'fonts')
        }
      }
    },
    {
      issuer: typographyPath('data', 'hashes.js'),
      use: {
        loader: 'file-loader',
        options: {
          emitFile: false,
          hash: 'sha512',
          digest: 'hex',
          name: '[hash:3]'
        }
      }
    }
  ]
};
