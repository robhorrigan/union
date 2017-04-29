import React from 'react';
import { List } from '#docs/components/HeaderNav/List';
import { mount } from 'enzyme';
import { classString } from '#spec/support/enzyme-component';

describe('<List>', () => {
  const stylesMock = {
    'vertical-list': 'vertical-list',
    list: 'list'
  };

  describe('[align="horizontal"]', () => {
    it('applies vertical alignment class', () => {
      const subject = mount(<List align="horizontal" styles={stylesMock} />);

      expect(subject::classString()).toBe('list');
    });
  });

  describe('[align="vertical"]', () => {
    it('applies vertical alignment class', () => {
      const subject = mount(<List align="vertical" styles={stylesMock} />);

      expect(subject::classString()).toContain('vertical-list');
    });
  });
});
