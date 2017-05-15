import externalizeAllPackages from './';

describe('.externalizeAllPackages', () => {
  it('externalizes all packages', () => {
    const spy = jasmine.createSpy('callback');

    externalizeAllPackages()('', './a', spy);

    expect(spy).toHaveBeenCalledWith();

    externalizeAllPackages()('', '../b', spy);

    expect(spy).toHaveBeenCalledWith();

    externalizeAllPackages()('', '__shared__', spy);

    expect(spy).toHaveBeenCalledWith();

    externalizeAllPackages()('', '#assets', spy);

    expect(spy).toHaveBeenCalledWith();

    externalizeAllPackages()('', 'react', spy);

    expect(spy).toHaveBeenCalledWith(null, 'react');
  });
});
