export default function values() {
  if (typeof Object.values === 'function') {
    return Object.values(this);
  }

  return Object.keys(this).map(key => this[key]);
}

