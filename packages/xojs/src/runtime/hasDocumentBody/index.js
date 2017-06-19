export default function hasDocumentBody() {
  return typeof document !== 'undefined' && typeof document.body !== 'undefined';
}
