const path = require('path');
const cssByebye = require('css-byebye');

const pureModulePath = require.resolve('../pattern-library/src/typography/index.scss');
const globalsPath = require.resolve('../pattern-library/src/typography/globals.scss');
const fontsPath = require.resolve('../pattern-library/src/typography/fonts.scss');

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
