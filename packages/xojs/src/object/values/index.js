export default function values() {
  return Object.keys(this).map(key => this[key]);
}

