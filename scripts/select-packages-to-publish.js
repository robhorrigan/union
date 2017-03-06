/* eslint-disable no-console */

const logDiffTree = require('./helpers/logDiffTree');
const packageList = require('./helpers/packageList');
const askToChoosePackages = require('./helpers/askToChoosePackages');
const publish = require('./helpers/publish');
const forcePublicAccess = require('./helpers/packages/forcePublicAccess');

async function main() {
  const allPackages = packageList();

  await logDiffTree();

  const packagesToPublish = await askToChoosePackages(await allPackages);

  await publish(packagesToPublish);
  await forcePublicAccess({ scope: '@xo-union/*' });
}

main().catch(error => console.error(error));
