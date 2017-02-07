const path = require('path');
const extend = require('extend');
const rules = require('./webpack/rules');
const resolve = require('./webpack/resolve');

module.exports = {
  resolve: extend(true, {
    alias: {
      /* Allow package references to be resolved correctly */
      '@xo-union': path.resolve(__dirname, 'pattern-library', 'pkgs')
    }
  }, resolve),
  module: { rules },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
}
