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
    use: [
      'babel-loader',
      {
        loader: MDJSX_LOADER,
        options: {
          compilerPath: require.resolve('../docs/src/markdown_compiler/index.jsx')
        }
      }
    ]
  }
];
