import glob from 'glob-all';
import flatten from 'xojs/lib/array/flatten';
import { readFile } from 'fs';
import { packagesPath } from './path';
import getAssumedDistFiles from './getAssumedDistFiles';
import getRequiredPackages from './getRequiredPackages';

class Package {
  constructor(path) {
    this.path = path;
  }

  packageJson() {
    return new Promise((resolve, reject) => {
      readFile(this.thisPackagePath('package.json'), (err, content) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(JSON.parse(content.toString()));
      });
    });
  }

  thisPackagePath(...subPaths) {
    return packagesPath(this.path, ...subPaths);
  }

  async readExpectedFiles() {
    const expectedFiles = await this.getExpectedFiles();

    const filePromises = expectedFiles.map(fileName =>
      new Promise((resolve, reject) =>
        readFile(this.thisPackagePath(fileName), (err, content) => {
          if (err) {
            reject(err);
          }

          resolve(content);
        })
      )
    );

    return Promise.all(filePromises);
  }

  async getRequiredPackages() {
    const result = (await this.readExpectedFiles()).map(fileContent =>
      getRequiredPackages(fileContent.toString())
    )::flatten();

    return result;
  }
}

class PatternLibraryPackage extends Package {
  constructor(patternName) {
    super(`@xo-union/${patternName}`);
  }

  getExpectedFiles() {
    return new Promise((resolve, reject) => {
      readFile(this.thisPackagePath('entrypoints.json'), (err, content) => {
        if (err) {
          reject(err);
          return;
        }

        const entrypoints = JSON.parse(content.toString());
        resolve(getAssumedDistFiles(entrypoints));
      });
    });
  }
}

class BabelDirectoryPackage extends Package {
  getExpectedFiles() {
    return new Promise((resolve, reject) => {
      glob([
        packagesPath(this.path, 'src', '**', '*.js'),
        `!${packagesPath(this.path, 'src', '**', '*spec.js')}`
      ], (err, srcJsFiles) => {
        if (err) {
          reject(err);
          return;
        }

        const assumedDistFiles = srcJsFiles.map(srcFile =>
          srcFile.replace(this.thisPackagePath('src'), 'lib')
        );

        resolve(assumedDistFiles);
      });
    });
  }
}

function allPatternLibraryObjects() {
  return new Promise((resolve, reject) => {
    glob([
      packagesPath('@xo-union', '*', 'package.json')
    ], (err, packageJsonPaths) => {
      if (err) {
        reject(err);
        return;
      }

      const patternLibraryObjects = packageJsonPaths.map((path) => {
        const patternName = path.match(/\/([^/]+)\/package.json$/)[1];
        return new PatternLibraryPackage(patternName);
      });

      resolve(patternLibraryObjects);
    });
  });
}

export default async function getPackages() {
  return [
    ...(await allPatternLibraryObjects()),
    new BabelDirectoryPackage('xojs')
  ];
}
