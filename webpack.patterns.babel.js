import path from 'path';
import webpack from 'webpack';
import externalizeRequires from './webpack/helpers/externalizeRequires';
import { buildEntrypoints } from './webpack/helpers/buildEntrypoints';
import rules from './webpack/patterns-rule-list';
import { resolveDefaults, resolveLoaders } from './webpack/resolve';

const patternPackagesPath = path.resolve.bind(null, __dirname, 'packages', '@xo-union');

export default {
  resolve: resolveDefaults,
  resolveLoader: resolveLoaders,
  context: patternPackagesPath(),
  entry: buildEntrypoints({
    context: patternPackagesPath(),
    srcDirectory: 'src',
    distDirectory: 'lib'
  }),
  output: {
    path: patternPackagesPath(),
    filename: '[name]',
    libraryTarget: 'umd'
  },
  externals: [
    externalizeRequires([
      /^@xo-union/,
      'react',
      'prop-types',
      'css-module-builder',
      'core-decorators',
      'matches-selector',
      '@segment/is-meta',
      /^xojs/
    ])
  ],
  module: { rules },
  plugins: [
    new webpack.DefinePlugin({
      ENV: 'process.env.NODE_ENV'
    })
  ]
};
