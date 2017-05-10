/* eslint-disable no-console */
import logDiffTree from './diff/logDiffTree';
import packageList from './packages/list';
import askToChoosePackages from './askToChoosePackages';
import publish from './packages/publish';
import forcePublicAccess from './packages/forcePublicAccess';

async function main() {
  const allPackages = packageList();

  await logDiffTree();

  const packagesToPublish = await askToChoosePackages(await allPackages);

  await publish(packagesToPublish);
  await forcePublicAccess({ scope: '@xo-union/*' });
}

main().catch(error => console.error(error));
