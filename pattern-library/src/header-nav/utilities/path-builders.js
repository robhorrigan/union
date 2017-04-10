export function path(...pathSegments) {
  return `${this}/${pathSegments.join('/')}`;
}

export function params(paramsObject) {
  const serializedParams = Object.keys(paramsObject).map(key =>
    `${key}=${paramsObject[key]}`
  );

  return `${this}?${serializedParams.join('&')}`;
}
