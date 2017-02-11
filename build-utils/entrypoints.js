const fs = require('fs');
const path = require('path');
const glob = require('glob-all');

function defaultExtensionMapper(extension) {
  if (/\.jsx?$/.test(extension)) {
    return '.js';
  }

  if (/\.s?css$/.test(extension)) {
    return '.cssm';
  }

  return extension;
}

exports.getEntrypointsFiles = function getEntrypointsFiles({ where }) {
  return glob.sync([
    '**/.entrypoints.json'
  ], {
    cwd: where,
    absolute: true
  });
};

exports.adaptEntrypoints = function adaptEntrypoints(
  entrypointFiles,
  {
    relativeTo,
    mapExtension = defaultExtensionMapper
  }
) {
  const allEntrypoints = {};

  entrypointFiles.forEach((entrypointFile) => {
    const files = JSON.parse(fs.readFileSync(entrypointFile));
    const relativePath = path.relative(relativeTo, entrypointFile);
    const relativeDir = path.dirname(relativePath);

    files.forEach((file) => {
      const extension = path.extname(file);
      const basename = path.basename(file, extension);
      const dirname = path.dirname(file);
      const newExtension = mapExtension(extension);

      const destinationPath = path.join(relativeDir, dirname, `${basename}${newExtension}`);
      const sourcePath = path.join(relativeDir, file);

      allEntrypoints[destinationPath] = `./${sourcePath}`;
    });
  });

  return allEntrypoints;
};

exports.buildEntrypoints = function buildEntrypoints({ context }) {
  const entrypointFiles = exports.getEntrypointsFiles({ where: context });
  return exports.adaptEntrypoints(entrypointFiles, { relativeTo: context });
};
