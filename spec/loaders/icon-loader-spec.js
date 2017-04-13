const loader = require('../../pattern-library/src/loaders/icon-loader');

describe('icon-loader', () => {
  const svgMock = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <symbol id="aaa" viewBox="0 0 32 32">
    </symbol>
    <symbol id="bbb" viewBox="0 0 32 32">
    </symbol>
  </defs>
</svg>
`;
  let loaderInstanceMock;

  beforeEach(() => {
    loaderInstanceMock = {
      cacheable() {},
      async() {
        return (err, value) => {
          this.callbackResult = value;
        };
      }
    };
  });

  it('adds a unique identifier to the icon symbols', () => {
    loader.call(loaderInstanceMock, svgMock);

    const result = loaderInstanceMock.callbackResult;
    expect(result).toContain('<symbol id="aaa-a78"');
    expect(result).toContain('<symbol id="bbb-a78"');
  });

  it('allows getting just the stamp', () => {
    loaderInstanceMock.query = {
      onlyStamp: true
    };

    loader.call(loaderInstanceMock, svgMock);

    const result = loaderInstanceMock.callbackResult;
    expect(result).toEqual('a78');
  });

  it('allows exporting the generated values', () => {
    loaderInstanceMock.query = {
      onlyStamp: true,
      exportsResult: true
    };

    loader.call(loaderInstanceMock, svgMock);

    const result = loaderInstanceMock.callbackResult;
    expect(result).toEqual('module.exports = "a78";');
  });
});
