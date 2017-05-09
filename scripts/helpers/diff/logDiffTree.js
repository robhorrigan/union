import { EOL } from 'os';
import chalk from 'chalk';
import treeify from 'treeify';
import path from 'path';

import spawn from '../spawn';
import { withColors as parseDiffWithColors } from './parseDiff';

const PROJECT_ROOT = path.resolve(__dirname, '..', '..', '..');

function createDiffTreeObject(changedFiles, {
  startAtLevel = 0,
  ignore = /^$/
} = {}) {
  return changedFiles.reduce((treeObj, { typeOfChange, name = '' }) => {
    if (ignore.test(name)) {
      return treeObj;
    }

    const pathSegments = name.split(path.sep).slice(startAtLevel);

    pathSegments.reduce((branch, segment, index) => {
      /* eslint-disable no-param-reassign */
      if (index === pathSegments.length - 1) {
        // is last
        branch[segment] = typeOfChange.toString();
      } else {
        branch[segment] = branch[segment] || {};
      }

      return branch[segment];
    }, treeObj);

    return treeObj;
  }, {});
}

function renderTree(treeObject) {
  return treeify.asTree(treeObject, true);
}

function diffSince(tag, { where }) {
  return spawn('git', ['diff', '--name-status', tag, '--', where]);
}

function lastTag() {
  return spawn('git', ['describe', '--abbrev=0', '--tags']);
}

export default async function logDiffTree() {
  const tag = await lastTag();

  return diffSince(tag, { where: PROJECT_ROOT })
  .then(parseDiffWithColors)
  .then(createDiffTreeObject)
  .then(renderTree)
  .then((changedPackages) => {
    /* eslint-disable */
    console.log('These are changed files since the last publish');
    console.log(`Using tag ${chalk.green(tag)}`);
    console.log(EOL);
    console.log(changedPackages);
    /* eslint-enable */
  });
};
