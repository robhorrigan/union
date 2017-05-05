import scan from 'xojs/lib/string/scan';

function unique() {
  return [...new Set(this)];
}

function scanRequires(source) {
  return source::scan(/require\(['"]([^'"]+)['"]\)/);
}

function packageNameForPath(path) {
  if (path[0] === '@') {
    return path.split('/', 2).join('/');
  }

  return path.split('/', 1)[0];
}

export default function getRequiredPackages(source) {
  return scanRequires(source).map((match) => {
    const path = match[1];
    return packageNameForPath(path);
  })::unique();
}
