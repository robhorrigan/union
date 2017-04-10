const patternsRuleList = require('./webpack/patterns-rule-list');
const articlesRuleList = require('./webpack/articles-rule-list');
const resolve = require('./webpack/resolve');

module.exports = {
  resolve: resolve.testAndDocs,
  module: {
    rules: [
      ...patternsRuleList,
      ...articlesRuleList,
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
