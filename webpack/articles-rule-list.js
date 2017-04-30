const queryParamPattern = require('./helpers/queryParamPattern');

const DIRECTORY_LOADER = require.resolve('../packages/tools/directory-loader');
const MDJSX_LOADER = require.resolve('../packages/tools/mdjsx-loader');

module.exports = [
  {
    resourceQuery: {
      test: queryParamPattern('readDirectory')
    },
    use: DIRECTORY_LOADER
  },
  {
    test: /\.md$/,
    use: ['babel-loader', MDJSX_LOADER]
  }
];
