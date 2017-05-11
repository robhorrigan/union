import colors from '@xo-union/tk-css-colors';

function excludeCamelizedKeys(key) {
  return !/[A-Z]|[a-z][0-9]/.test(key);
}
export default function uniqueColorsNames() {
  return Object.keys(colors).filter(excludeCamelizedKeys);
}
