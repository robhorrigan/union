import { inspect } from 'util';
import getPackages from './helpers/packageExpectations';
import getPackedFiles from './helpers/getPackedFiles';

describe('distributed packages', () => {
  let packages;

  beforeAll(async (done) => {
    packages = await getPackages();
    done();
  });

  it('pack the expected files', (done) => {
    const promises = packages.map(async (packageObj) => {
      const expectedFiles = packageObj.getExpectedFiles();
      const packedFiles = getPackedFiles(packageObj.thisPackagePath());
      const { name } = await packageObj.packageJson();

      // Assume the package json is always there
      const filteredPackedFiles = (await packedFiles).filter(f => f !== 'package.json');

      const sortedExpectedFiles = (await expectedFiles).sort();
      const sortedActualFiles = filteredPackedFiles.sort();

      expect(sortedActualFiles).toEqual(sortedExpectedFiles,
        `Expected ${inspect(sortedExpectedFiles)} to be packed in ${name}.
         Instead saw ${inspect(sortedActualFiles)}`
      );
    });

    Promise.all(promises).catch(fail).then(done);
  }, 10e3);

  it('define the correct dependencies in package.json', (done) => {
    const promises = packages.map(async (packageObj) => {
      const { name, dependencies } = await packageObj.packageJson();
      (await packageObj.getRequiredPackages()).forEach((requiredPackageName) => {
        if (requiredPackageName === name) {
          // Skip test if depends on itself
          return;
        }

        const specifiedAsDependency = !!dependencies[requiredPackageName];
        expect(specifiedAsDependency).toBe(true,
          `Expected ${requiredPackageName} to be a dependency of ${name}`
        );
      });
    });

    Promise.all(promises).catch(fail).then(done);
  });
});
