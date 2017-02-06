const cssByebye = require('css-byebye');

const pureModulePath = require.resolve('../src/typography/css/index.scss');
const globalsPath = require.resolve('../src/typography/css/globals.scss');

function useEntryBuilder(rulesToRemove) {
  return {
    loader: 'postcss-loader',
    options: {
      plugins: () => [ cssByebye({ rulesToRemove }) ]
    }
  };
}

const removeGlobalsUseEntry = useEntryBuilder([
  /h[\dr]/,
  'small',
  'mark'
]);

const removeClassesUseEntry = useEntryBuilder([
  /^\..+$/
]);


exports.typographyGlobalsPath = globalsPath;
exports.typographyRules = [
  {
    include: pureModulePath,
    use: removeGlobalsUseEntry
  },
  {
    include: globalsPath,
    use: removeClassesUseEntry
  }
]
