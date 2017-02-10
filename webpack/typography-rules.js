const cssByebye = require('css-byebye');

const pureModulePath = require.resolve('../pattern-library/src/typography/index.scss');
const globalsPath = require.resolve('../pattern-library/src/typography/globals.scss');
const fontsPath = require.resolve('../pattern-library/src/typography/fonts.scss');

function useEntryBuilder(rulesToRemove) {
  return {
    loader: 'postcss-loader',
    options: {
      plugins: () => [cssByebye({ rulesToRemove })]
    }
  };
}

const removeGlobalsUseEntry = useEntryBuilder([
  /^h[\dr]/,
  'small',
  'mark'
]);

const removeClassesUseEntry = useEntryBuilder([
  /^\..+$/
]);


exports.typographyFontsPath = fontsPath;
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
];
