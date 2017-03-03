/* eslint-disable no-console */

const logDiffTree = require('./helpers/logDiffTree');
const packageList = require('./helpers/packageList');
const askToChoosePackages = require('./helpers/askToChoosePackages');
const publish = require('./helpers/publish');

async function main() {
  const packages = await packageList();

  await logDiffTree();

  const { toPublish } = await askToChoosePackages(await packages);

  return publish(toPublish);
}

main().catch(error => console.error(error));
