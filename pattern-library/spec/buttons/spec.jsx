import React from 'react';
import { mount } from 'enzyme';
import Buttons from '#/buttons';

describe('<Buttons>', () => {
  it('says hello', () => {
    const subject = mount(<Buttons />);
    expect(subject.text()).toContain('Hello there');
  });
});
