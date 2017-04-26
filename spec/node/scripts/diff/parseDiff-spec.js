const parseDiff = require('../../../../scripts/helpers/diff/parseDiff');

describe('.parseDiff', () => {
  it('parses the diff output', () => {
    const diffStringMock = `M a.js
A b.js
U c.js
D d.js
R012 e.js f.js
C012 g.js h.js`;

    const result = parseDiff(diffStringMock);
    expect(result[0].typeOfChange).toBe('modified');
    expect(result[0].name).toBe('a.js');

    expect(result[1].typeOfChange).toBe('created');
    expect(result[1].name).toBe('b.js');

    expect(result[2].typeOfChange).toBe('unmerged');
    expect(result[2].name).toBe('c.js');

    expect(result[3].typeOfChange).toBe('deleted');
    expect(result[3].name).toBe('d.js');

    expect(result[4].typeOfChange).toBe('renamed-modified -- from: e.js');
    expect(result[4].name).toBe('f.js');

    expect(result[5].typeOfChange).toBe('copied-modified -- from: g.js');
    expect(result[5].name).toBe('h.js');
  });
});
