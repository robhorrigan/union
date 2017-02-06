const path = require('path');
const rules = require('./webpack/rules');
const resolve = require('./webpack/resolve');

module.exports = {
  resolve: Object.assign({
    alias: {
      /* Allow package references to be resolved correctly */
      '@xo-union': path.resolve(__dirname, 'pkgs')
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
