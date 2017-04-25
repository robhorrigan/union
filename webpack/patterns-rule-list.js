const cssRules = require('./css-rules').default;
const fontRules = require('./typography-rules').typographyFontsRules;

function queryParamPattern(text) {
  return new RegExp(`[?&]${text}(?:&|$)`);
}

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
  },
  {
    resourceQuery: { test: queryParamPattern('dev') },
    use: {
      loader: 'if-production-loader',
      options: { not: true }
    }
  },
  {
    resourceQuery: { test: queryParamPattern('raw') },
    use: 'string-loader'
  },
  {
    resourceQuery: { test: queryParamPattern('hash') },
    use: {
      loader: 'file-loader',
      options: {
        name: '[hash:3]',
        emitFile: false
      }
    }
  },
  {
    resourceQuery: { test: queryParamPattern('iconsUrl') },
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '/[name]-[hash:3].[ext]',
          publicPath: '//assets.union.theknot.com/icons',
          outputPath: '../../public/assets/icons'
        }
      }
    ]
  },
  {
    test: /\.svg$/,
    use: {
      loader: 'svgo-loader',
      options: {
        plugins: [
          { removeUselessDefs: false },
          { removeIds: true },
          { cleanupIDs: false }
        ]
      }
    }
  },
];
