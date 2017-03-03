const { EOL } = require('os');
const spawn = require('./spawn');
const chalk = require('chalk');
const treeify = require('treeify');
const path = require('path');
const ColoredString = require('./ColoredString');

const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

function diffStatusColorRules(value) {
  if (value === 'rename-edit' || value === 'copy-edit') {
    return 'yellow';
  }

  if (value === 'delete' || value === 'unmerged') {
    return 'red';
  }

  if (value === 'unknown') {
    return 'black';
  }

  return 'green';
}

function diffStatusMap(status) {
  if (status.indexOf('R') === 0) {
    return 'rename-edit';
  }

  if (status.indexOf('C') === 0) {
    return 'copy-edit';
  }

  if (status === 'M') {
    return 'in-place edit';
  }

  if (status === 'A') {
    return 'create';
  }

  if (status === 'D') {
    return 'delete';
  }

  if (status === 'U') {
    return 'unmerged';
  }

  return 'unknown';
}

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

function parseDiff(diffResult) {
  return diffResult.split(EOL).map((statusAndName) => {
    const [status, originalName, newName] = statusAndName.split(/\s+/);
    const verboseStatus = new ColoredString(diffStatusMap(status), diffStatusColorRules);

    if (verboseStatus === 'rename-edit' || verboseStatus === 'copy-edit') {
      return {
        typeOfChange: `${verboseStatus} -- from: ${originalName}`,
        name: newName
      };
    }

    return { typeOfChange: verboseStatus, name: originalName };
  });
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
  .then(parseDiff)
  .then(createDiffTreeObject)
  .then(renderTree)
  .then((changedPackages) => {
    console.log('These are changed files since the last publish');
    console.log(`Using tag ${chalk.green(tag)}`);
    console.log(EOL);
    console.log(changedPackages);
  });
};
