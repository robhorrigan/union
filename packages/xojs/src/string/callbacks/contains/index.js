export default function contains(...subStrings) {
  return string => subStrings.some(sub => string.indexOf(sub) >= 0);
}
