export function normalizePath(...pathSegments) {
  return pathSegments.join('/').replace(/\/{2,}/g, '/');
}

