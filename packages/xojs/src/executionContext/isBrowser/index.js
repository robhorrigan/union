export default function isBrowser() {
  return typeof document !== 'undefined' && typeof document.body !== 'undefined';
}
