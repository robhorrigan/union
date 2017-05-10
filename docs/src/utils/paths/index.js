function normalizePathString(path) {
  return path.replace(/\/{2,}/g, '/').replace(/\/$/, '');
}

// eslint-disable-next-line import/prefer-default-export
export function normalizePath(...pathSegments) {
  return normalizePathString(pathSegments.join('/'));
}

