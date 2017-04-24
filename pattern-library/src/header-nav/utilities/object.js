const has = Object.prototype.hasOwnProperty;

export function values() {
  return Object.keys(this).map(key => this[key]);
}

export function only(...keys) {
  const newObject = {};

  keys.forEach((key) => {
    if (this::has(key)) {
      newObject[key] = this[key];
    }
  });

  return newObject;
}
