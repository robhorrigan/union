export default function dig(...keys) {
  return keys.reduce((obj, key) => {
    return obj && obj[key];
  }, this);
}
