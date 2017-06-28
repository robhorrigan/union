import path from 'path';
import webpack from 'webpack';
import { buildEntrypoints } from '../../webpack/helpers/buildEntrypoints';
import rules from '../../webpack/patterns-rule-list';
import { resolveDefaults, resolveLoaders } from '../../webpack/resolve';

const patternPackagesPath = path.resolve.bind(null, __dirname, '..', '..', 'packages', '@xo-union');
const staticPath = path.resolve.bind(null, __dirname, '..', '..', 'static');

export default {
  resolve: {
    extensions: resolveDefaults.extensions,
    modules: resolveDefaults.modules,
    alias: {
      '#assets': staticPath('assets'),
      '@xo-union': patternPackagesPath()
    }
  },
  resolveLoader: resolveLoaders,
  context: patternPackagesPath(),
  entry: buildEntrypoints({
    context: patternPackagesPath(),
    srcDirectory: 'src',
    distDirectory: 'lib'
  }),
  output: {
    path: path.resolve('__tmp__'),
    filename: '[name]',
    libraryTarget: 'umd'
  },
  module: { rules },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      test: /\.js$|\.cssm$/
    }),
    new webpack.DefinePlugin({
      ENV: '"production"',
      'process.env.NODE_ENV': '"production"'
    })
  ]
};
