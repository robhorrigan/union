const path = require('path');
const patternDocsPath = path.resolve.bind(null, __dirname, '..', 'pattern-library', 'docs');
const DIRECTORY_LOADER = require.resolve('../packages/tools/directory-loader');
const MDJSX_LOADER = require.resolve('../packages/tools/mdjsx-loader');
const ARTICLES_DIR_CONFIG_PATH = patternDocsPath('articles-directory.config.json');

module.exports = [
  {
    test: ARTICLES_DIR_CONFIG_PATH,
    use: DIRECTORY_LOADER
  },
  {
    test: /\.md$/,
    use: ['babel-loader', MDJSX_LOADER]
  }
];
