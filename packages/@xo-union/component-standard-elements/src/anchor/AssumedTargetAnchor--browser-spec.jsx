import React from 'react';
import { mount } from 'enzyme';
import { AssumedTargetAnchor } from './';

describe('<AssumedTargetAnchor>', () => {
  describe('when relative path is given', () => {
    it('assumes nothing', () => {
      const subject = mount(<AssumedTargetAnchor href="/a" />);
      expect(subject.getDOMNode().target).toBe('');
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
