import { resolveDefaults } from '../../resolve';

function doNotStartWith(patterns) {
  return (context, request, callback) => {
    const noneOfThePatternsMatch = patterns.every(pattern => request.indexOf(pattern) !== 0);

    if (noneOfThePatternsMatch) {
      callback(null, request);
    } else {
      callback();
    }
  };
}

export default function allPackages() {
  return doNotStartWith([
    '.',
    '@models',
    '@components',
    '@actions',
    '@utilities',
    ...Object.keys(resolveDefaults.alias)
  ]);
}
