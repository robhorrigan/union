export default function exclude(callback) {
  return this.filter((...args) => !callback(...args));
}
