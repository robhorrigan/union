const fs = require('fs');
const path = require('path');
const glob = require('glob-all');

function assumedExtension(extension) {
  if (/\.jsx?$/.test(extension)) {
    return '.js';
  }

  if (/\.s?css$/.test(extension)) {
    return '.cssm';
  }

  return extension;
}

function assumedDestinationFileName(fileName) {
  const extension = path.extname(fileName);
  const basename = path.basename(fileName, extension);
  const newExtension = assumedExtension(extension);

  return `${basename}${newExtension}`;
}

function normalizeFiles(files) {
  return files.map((file) => {
    if (typeof file === 'string') {
      return {
        from: file,
        to: assumedDestinationFileName(file)
      };
    }

    return file;
  });
}

exports.getEntrypointsFiles = function getEntrypointsFiles({ where }) {
  return glob.sync([
    '**/entrypoints.json'
  ], {
    cwd: where,
    absolute: true
  });
};

exports.adaptEntrypoints = function adaptEntrypoints(
  entrypointFiles,
  { relativeTo }
) {
  const allEntrypoints = {};

  entrypointFiles.forEach((entrypointFile) => {
    const files = JSON.parse(fs.readFileSync(entrypointFile));
    const relativePath = path.relative(relativeTo, entrypointFile);
    const relativeDir = path.dirname(relativePath);

    normalizeFiles(files).forEach(({ from, to }) => {
      const dirname = path.dirname(from);

      const destinationPath = path.join(relativeDir, dirname, to);
      const sourcePath = path.join(relativeDir, from);

      allEntrypoints[destinationPath] = `./${sourcePath}`;
    });
  });

  return allEntrypoints;
};

exports.buildEntrypoints = function buildEntrypoints({ context }) {
  const entrypointFiles = exports.getEntrypointsFiles({ where: context });
  return exports.adaptEntrypoints(entrypointFiles, { relativeTo: context });
};
