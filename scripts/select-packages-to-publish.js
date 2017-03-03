/* eslint-disable no-console */

const { EOL } = require('os');
const inquirer = require('inquirer');
const treeify = require('treeify');
const chalk = require('chalk');
const { spawn } = require('child_process');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '..');

function spawnProc(...args) {
  const proc = spawn(...args);

  return new Promise((resolve, reject) => {
    let buffer = '';
    let errBuffer = '';

    if (proc.stdout) {
      proc.stdout.on('data', (data) => {
        buffer += data.toString('utf8');
      });
    }

    if (proc.stderr) {
      proc.stderr.on('data', (data) => {
        errBuffer += data.toString('utf8');
      });
    }

    proc.on('close', (exitCode) => {
      if (exitCode === 0) {
        resolve(buffer.trim());
      } else {
        reject(errBuffer.trim());
      }
    });
  });
}

function diffSince(tag, { where }) {
  return spawnProc('git', ['diff', '--name-status', tag, '--', where]);
}

function lastTag() {
  return spawnProc('git', ['describe', '--abbrev=0', '--tags']);
}

function parseDiff(diffResult) {
  return diffResult.split(EOL).map((statusAndName) => {
    const [status, name] = statusAndName.split(/\s+/);
    return { status, name };
  });
}

function createDiffTreeObject(changedFiles, {
  startAtLevel = 0,
  ignore = /^$/
} = {}) {
  return changedFiles.reduce((treeObj, { status, name }) => {
    if (ignore.test(name)) {
      return treeObj;
    }

    const pathSegments = name.split(path.sep).slice(startAtLevel);


    pathSegments.reduce((branch, segment, index) => {
      /* eslint-disable no-param-reassign */
      if (index === pathSegments.length - 1) {
        // is last
        branch[segment] = status;
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

async function logDiffTree() {
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
}

async function packageList() {
  const output = await spawnProc('lerna', ['ls']);
  return output
    .split(EOL)
    .slice(2) // ignore lerna's nonsense
    .map(packageName => packageName.split(/\s+/)[0]); // remove versions
}


async function askToChosePackages(packages) {
  return inquirer.prompt([
    {
      name: 'toPublish',
      message: 'Which packages do you want to publish?',
      type: 'checkbox',
      choices: packages
    }
  ]);
}

function publish(packages) {
  const commaSeparatedPackages = packages.join(',');

  return spawnProc('lerna',
    ['publish', '--ignore', '*', '--force-publish', commaSeparatedPackages],
    { stdio: 'inherit' });
}

async function main() {
  const packages = await packageList();

  await logDiffTree();

  const { toPublish } = await askToChosePackages(await packages);

  return publish(toPublish);
}

main().catch(error => console.error(error));
