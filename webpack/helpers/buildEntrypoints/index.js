import fs from 'fs';
import path from 'path';
import glob from 'glob-all';

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

export function getEntrypointsFiles({
  where,
  entrypointsManifestName = 'entrypoints.json'
}) {
  return glob.sync([
    `**/${entrypointsManifestName}`
  ], {
    cwd: where,
    absolute: true,
    ignore: [
      '**/node_modules/**'
    ]
  });
}

export function adaptEntrypoints(
  entrypointFiles,
  { relativeTo, srcDirectory = '', distDirectory = '' }
) {
  const allEntrypoints = {};

  entrypointFiles.forEach((entrypointFile) => {
    const files = JSON.parse(fs.readFileSync(entrypointFile));
    const relativePath = path.relative(relativeTo, entrypointFile);
    const relativeDir = path.dirname(relativePath);

    normalizeFiles(files).forEach(({ from, to }) => {
      const perFileDirName = path.dirname(from);

      const destinationPath = path.join(relativeDir, distDirectory, perFileDirName, to);
      const sourcePath = path.join(relativeDir, srcDirectory, from);

      allEntrypoints[destinationPath] = `./${sourcePath}`;
    });
  });

  return allEntrypoints;
}

export function buildEntrypoints({
  context,
  entrypointsManifestName,
  distDirectory,
  srcDirectory
}) {
  const entrypointFiles = exports.getEntrypointsFiles({ where: context, entrypointsManifestName });
  return exports.adaptEntrypoints(entrypointFiles,
    { relativeTo: context, distDirectory, srcDirectory });
}
