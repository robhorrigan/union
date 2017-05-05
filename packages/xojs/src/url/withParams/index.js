export default function withParams(paramsObject) {
  const serializedParams = Object.keys(paramsObject).map(key =>
    `${key}=${paramsObject[key]}`
  );

  return `${this}?${serializedParams.join('&')}`;
}
