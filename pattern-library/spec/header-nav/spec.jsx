import React from 'react';
import { mount } from 'enzyme';
import HeaderNav from '#/header-nav';

describe('<HeaderNav>', () => {
  it('says hello', () => {
    const subject = mount(<HeaderNav />);
    expect(subject.text()).toContain('Hello there');
  });
});
