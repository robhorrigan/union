export function labelize(string) {
  return string.split(/[\W\s]/g).map((word) => {
    return word.replace(/^(\w)/, (w) => w.toUpperCase());
  }).join(' ');
}

export function fieldId(name) {
  return `__ff-${name}__`;
}
