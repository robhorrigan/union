import queryParamPattern from './helpers/queryParamPattern';

const DIRECTORY_LOADER = require.resolve('../packages/tools/directory-loader');
const MDJSX_LOADER = require.resolve('../packages/tools/mdjsx-loader');

export default [
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
