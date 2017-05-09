import { DefinePlugin } from 'webpack';
import patternsRuleList from './webpack/patterns-rule-list';
import articlesRuleList from './webpack/articles-rule-list';
import { resolveLoaders, resolveTestAndDocs } from './webpack/resolve';

export default {
  resolve: resolveTestAndDocs,
  resolveLoader: resolveLoaders,
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
  },
  plugins: [
    new DefinePlugin({ ENV: '"test"' })
  ]
};
