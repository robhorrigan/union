function last () {
  this[this.length - 1];
}
export default function currentScript() {
  return document.currentScript || document.getElementsByTagName("script")::last();
}
