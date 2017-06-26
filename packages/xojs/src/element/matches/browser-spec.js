import matches from './';

describe('xojs.element.matches', () => {
  it('returns true if element matches the given selector', () => {
    const el = document.createElement('div');

    el.classList.add('a');

    document.body.appendChild(el);

    expect(el::matches('div')).toBe(true);

    expect(el::matches('.a')).toBe(true);

    expect(el::matches('body .a')).toBe(true);

    document.body.removeChild(el);
  });
});
