import mdjsx from '../';

describe('mdjsx-loader', () => {
  const loaderMock = {
    cacheable() {},
    query: '?compilerPath=test'
  };

  it('creates import expressions for react and react-remarkable', () => {
    const source = '';

    const result = mdjsx.call(loaderMock, source);

    expect(result).toContain("import React from 'react';");

    expect(result)
      .toContain('import compile from "test";');
  });

  it('creates import expressions from the front matter', () => {
    const source =
`---
$imports:
    '* as A': 'module'
    '{ B, C, D }': 'module2'
    E: 'module3'
---
`;

    const result = mdjsx.call(loaderMock, source);

    expect(result).toContain('import * as A from "module";');

    expect(result).toContain('import { B, C, D } from "module2";');

    expect(result).toContain('import E from "module3";');
  });

  it('exports the frontmatter attributes as "attributes"', () => {
    const source =
`---
a: b
---
`;

    const result = mdjsx.call(loaderMock, source);

    expect(result).toContain('exports.attributes = $attributes;');

    expect(result).toContain('const $attributes = {"a":"b"};');
  });

  it('passes down the component props ', () => {
    const source = '';

    const result = mdjsx.call(loaderMock, source);

    expect(result).toContain('exports.default = ($props) =>');
  });


  it('normalizes each line', () => {
    const source = `
# Test
Hello world

  <Component1 prop="a/b">
    Hello world
  </Component1>

<Component1>Hello world</Component1>

#### Test
<Component1/>
`;

    const result = mdjsx.call(loaderMock, source);

    expect(result).toContain(`
<div>
{compile("\\n# Test\\nHello world\\n\\n").tree}
  <Component1 prop="a/b">
{compile("    Hello world\\n").tree}
  </Component1>
{compile("\\n").tree}
<Component1>Hello world</Component1>
{compile("\\n#### Test\\n").tree}
<Component1/>
{compile("\\n").tree}
</div>`);
  });
});
