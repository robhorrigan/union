import React from 'react';
import { mount } from 'enzyme';
import { AssumedTargetAnchor } from './';

describe('<AssumedTargetAnchor>', () => {
  describe('when relative path is given', () => {
    let subject;
    let domNode;

    beforeEach(() => {
      subject = mount(<AssumedTargetAnchor href="/a" />);
      domNode = subject.getDOMNode();
    });

    it('assumes nothing', () => {
      expect(domNode.target).toBe('');
    });

    it('renders an anchor tag by default', () => {
      expect(domNode.tagName).toBe('A');
    });

    describe('when FallbackComponent is provided', () => {
      it('renders the FallbackComponent', () => {
        const FallbackComponent = () => <div />;
        subject = mount(<AssumedTargetAnchor href="/a" FallbackComponent={FallbackComponent} />);

        expect(subject.find(FallbackComponent).length).toBe(1);
      });
    });
  });

  describe('when full url with http protocol is given', () => {
    it('assumes a blank target', () => {
      const subject = mount(<AssumedTargetAnchor href="http://www.test.com/a/b" />);

      expect(subject.getDOMNode().target).toBe('_blank');
    });
  });

  describe('when full url with https protocol is given', () => {
    it('assumes a blank target', () => {
      const subject = mount(<AssumedTargetAnchor href="https://www.test.com/a/b" />);

      expect(subject.getDOMNode().target).toBe('_blank');
    });
  });

  describe('when full url without protocol is given', () => {
    it('assumes a blank target', () => {
      const subject = mount(<AssumedTargetAnchor href="//www.test.com/a/b" />);

      expect(subject.getDOMNode().target).toBe('_blank');
    });
  });
});
