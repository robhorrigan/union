const rules = require('./webpack/patterns-rules');
const resolve = require('./webpack/resolve');

module.exports = {
  resolve: resolve.testAndDocs,
  module: {
    rules: rules.concat([
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ])
  },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
