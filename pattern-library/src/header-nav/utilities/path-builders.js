export function path(...pathSegments) {
  return`${this}/${pathSegments.join('/')}`;
}

export function params(paramsObject) {
  const params = Object.keys(paramsObject).map(key => {
    return `${key}=${paramsObject[key]}`;
  });

  return `${this}?${params.join('&')}`;
}
