function normalizePathString(path) {
  return path.replace(/\/{2,}/g, '/').replace(/\/$/, '');
}

export function normalizePath(...pathSegments) {
  return normalizePathString(pathSegments.join('/'));
}

