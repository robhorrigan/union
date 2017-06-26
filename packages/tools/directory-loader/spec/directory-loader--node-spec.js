const fs = require('fs');
const path = require('path');
const requireFromString = require('require-from-string');

const articlesLoader = require('../');

const fixturePath = path.resolve.bind(path, __dirname, 'fixtures');
const fixtureConfigPath = fixturePath('directory-loader.config.json');
const fixtureSource = fs.readFileSync(fixtureConfigPath, { encoding: 'utf8' });

class WebpackLoaderInstaneMock {
  constructor() {
    this.asyncPromise = new Promise((resolve, reject) => {
      this.asyncPromiseResolve = resolve;
      this.asyncPromiseReject = reject;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  exec(source) {
    // Simulate chaining with json loader
    return JSON.parse(source);
  }

  // eslint-disable-next-line class-methods-use-this
  addContextDependency() { }

  // eslint-disable-next-line class-methods-use-this
  cacheable() { }

  async() {
    return (err, data) => {
      if (err) this.asyncPromiseReject(err);
      else this.asyncPromiseResolve(data);
    };
  }
}

describe('directory-loader', () => {
  beforeEach(function () {
    this.loaderInstance = new WebpackLoaderInstaneMock();
    this.loaderInstance.resourcePath = fixtureConfigPath;
  });

  it('is cacheable', function () {
    const cacheableSpy = spyOn(this.loaderInstance, 'cacheable');
    articlesLoader.call(this.loaderInstance, fixtureSource);

    expect(cacheableSpy).toHaveBeenCalled();
  });

  it('sets the context dependency to the root folder', function () {
    const addContextDependencySpy = spyOn(this.loaderInstance, 'addContextDependency');

    articlesLoader.call(this.loaderInstance, fixtureSource);

    const expectedArgument = path.join(
      path.dirname(fixtureConfigPath),
      'dir'
    );

    expect(addContextDependencySpy).toHaveBeenCalledWith(expectedArgument);
  });

  it('creates a module which includes all modules in the directory', function (done) {
    articlesLoader.call(this.loaderInstance, fixtureSource);

    this.loaderInstance.asyncPromise.then((moduleString) => {
      const module = requireFromString(moduleString);

      expect(module.files.length).toBe(2);

      expect(module.files[1].module).toBe(fixturePath('dir', 'test.js'));

      expect(module.files[0].module).toBe(fixturePath('dir', 'nested', 'test-2.js'));

      expect(module.files[1].pathinfo.ext).toBe('.js');

      expect(module.files[1].pathinfo.name).toBe('test');

      expect(module.files[1].pathinfo.relativeName).toBe('test');

      expect(module.files[0].pathinfo.relativeName).toBe('nested/test-2');
    })
    .catch(fail)
    .then(done);
  });
});
