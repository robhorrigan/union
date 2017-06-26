import cssRules from './css-rules';
import { typographyFontsRules } from './typography-rules';
import queryParamPattern from './helpers/queryParamPattern';

export default [
  cssRules,
  typographyFontsRules,
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
          publicPath: '//union.theknot.com/icons',
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
          { removeTitle: true },
          { cleanupIDs: false }
        ]
      }
    }
  },
];
