import colors from '@xo-union/tk-css-colors';

function excludeCamelizedKeys(key) {
  return /^var-/.test(key);
}
export default function uniqueColorsNames() {
  return Object.keys(colors).filter(excludeCamelizedKeys);
}
