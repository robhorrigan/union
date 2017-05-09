import React from 'react';
import { mount } from 'enzyme';
import Prism from 'prismjs';
import Snippet from './';

describe('<Snippet>', () => {
  it('assigns a prismjs friendly language class name', () => {
    const subject = mount(<Snippet lang="test" />);

    const codeClass = subject.find('code').node.classList[0];
    expect(codeClass).toBe('language-test');
  });

  it('accepts an optional inline attr that removes <pre>', () => {
    const subject = mount(<Snippet inline />);

    expect(subject.find('code').length).toEqual(1);
    expect(subject.find('pre').length).toEqual(0);
  });

  describe('on componentDidMount', () => {
    it('processes the code node with PrismJs', () => {
      const highlightSpy = spyOn(Prism, 'highlightElement');
      const subject = mount(<Snippet lang="test" />);

      const codeNode = subject.find('code').node;

      expect(highlightSpy).toHaveBeenCalledWith(codeNode);
    });
  });

  describe('on componentDidUpdate', () => {
    it('processes the code node with PrismJs', () => {
      const subject = mount(<Snippet lang="test" />);

      const highlightSpy = spyOn(Prism, 'highlightElement');
      const codeNode = subject.find('code').node;
      subject.update();

      expect(highlightSpy).toHaveBeenCalledWith(codeNode);
    });
  });
});
