const rules = require('./webpack/pattern-rules');
const resolve = require('./webpack/resolve');

module.exports = {
  resolve: resolve.testAndDocs,
  module: { rules },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
