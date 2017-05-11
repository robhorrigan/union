import path from 'path';
import cssByebye from 'css-byebye';

const typographyPath = path.resolve.bind(
  null, __dirname, '..', 'packages', '@xo-union', 'tk-css-typography', 'src');

const pureModulePath = typographyPath('modules.scss');

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

export const typographyGlobalsPath = typographyPath('globals.scss');
export const typographyFontsPath = typographyPath('fonts.scss');

export const typographyCssRules = [
  {
    include: [typographyFontsPath],
    use: UseEntries.keepFontFaces
  },
  {
    include: pureModulePath,
    use: UseEntries.removeGlobals
  },
  {
    include: typographyGlobalsPath,
    use: UseEntries.removeClasses
  }
];

export const typographyFontsRules = {
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
          publicPath: '//assets.union.theknot.com/fonts',
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
