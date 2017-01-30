export default function labelize(string) {
  return string.split(/[\W\s]/g).map((word) => {
    return word.replace(/^(\w)/, (w) => w.toUpperCase());
  }).join(' ');
}
