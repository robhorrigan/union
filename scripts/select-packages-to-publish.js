/* eslint-disable no-console */
import logDiffTree from './helpers/diff/logDiffTree';
import packageList from './helpers/packages/list';
import askToChoosePackages from './helpers/askToChoosePackages';
import publish from './helpers/packages/publish';
import forcePublicAccess from './helpers/packages/forcePublicAccess';

async function main() {
  const allPackages = packageList();

  await logDiffTree();

  const packagesToPublish = await askToChoosePackages(await allPackages);

  await publish(packagesToPublish);
  await forcePublicAccess({ scope: '@xo-union/*' });
}

main().catch(error => console.error(error));
