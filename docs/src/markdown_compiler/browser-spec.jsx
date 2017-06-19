import React from 'react';
import { mount } from 'enzyme';
import compile from './';

describe('markdown compiler', () => {
  it('compiles markdown to react components', () => {
    const result = compile(`
# h1
## h2
### h3
#### h4

\`\`\`javascript
const someCode = true
\`\`\`

\`Inline code\`

[a Link](http://google.com)
`);
    const subject = mount(
      <div>{result.tree}</div>
    );

    const headers = subject.find('Header');
    const snippets = subject.find('Snippet');
    const anchors = subject.find('AssumedTargetAnchor');

    expect(headers.at(0).props().size).toBe(1);
    expect(headers.at(1).props().size).toBe(2);
    expect(headers.at(2).props().size).toBe(3);
    expect(headers.at(3).props().size).toBe(4);

    expect(snippets.at(0).props().lang).toBe('javascript');
    expect(snippets.at(1).props().inline).toBe(true);

    expect(anchors.at(0).props().href).toBe('http://google.com');
    expect(anchors.at(0).props().children).toEqual(['a Link']);
  });
});
