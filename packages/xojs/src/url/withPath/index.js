export default function withPath(...pathSegments) {
  return `${this}/${pathSegments.join('/')}`;
}
