export default function toQueryString() {
  const serializedParams = Object.keys(this).map(key =>
    `${key}=${this[key]}`
  );

  return serializedParams.join('&');
}
