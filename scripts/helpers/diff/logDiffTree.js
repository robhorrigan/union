const { EOL } = require('os');
const chalk = require('chalk');
const treeify = require('treeify');
const path = require('path');

const spawn = require('../spawn');
const parseDiff = require('./parseDiff');

const PROJECT_ROOT = path.resolve(__dirname, '..', '..', '..');

function createDiffTreeObject(changedFiles, {
  startAtLevel = 0,
  ignore = /^$/
} = {}) {
  return changedFiles.reduce((treeObj, { typeOfChange, name }) => {
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

module.exports = async function logDiffTree() {
  const tag = await lastTag();

  return diffSince(tag, { where: PROJECT_ROOT })
  .then(parseDiff.withColors)
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
