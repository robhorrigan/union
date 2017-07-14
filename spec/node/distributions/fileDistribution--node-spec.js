import { inspect } from 'util';
import getPackages from './helpers/packageExpectations';
import getPackedFiles from './helpers/getPackedFiles';

describe('distributed packages', () => {
  let packages;

  beforeAll((done) => {
    getPackages().then((result) => {
      packages = result;
      done();
    });
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
  }, 10e4);

  it('define the correct dependencies in package.json', (done) => {
    const promises = packages.map(async (packageObj) => {
      const { name, dependencies } = await packageObj.packageJson();
      const requiredDependencies = await packageObj.getRequiredPackages();

      requiredDependencies.forEach((requiredPackageName) => {
        if (requiredPackageName === name) {
          // Skip test if depends on itself
          return;
        }

        const specifiedAsDependency = !!dependencies[requiredPackageName];

        expect(specifiedAsDependency).toBe(true,
          `Expected ${requiredPackageName} to be a dependency of ${name}`
        );
      });

      Object.keys(dependencies).forEach((dependency) => {
        const isRequired = requiredDependencies.indexOf(dependency) >= 0;

        expect(isRequired).toBe(true,
          `Expected ${dependency} to be required by ${name}.
            Instead, these were required: ${JSON.stringify(requiredDependencies)}`);
      });
    });

    Promise.all(promises).catch(fail).then(done);
  });
});
