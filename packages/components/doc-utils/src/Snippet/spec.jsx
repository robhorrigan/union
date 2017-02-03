import React from 'react';
import { mount } from 'enzyme';
import Snippet from './';
import Prism from 'prismjs';

describe('<Snippet>', () => {
  it('assigns a prismjs friendly language class name', () => {
    const subject = mount(<Snippet lang="test" />);

    const codeClass = subject.find('code').node.classList[0];
    expect(codeClass).toBe('language-test');
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
