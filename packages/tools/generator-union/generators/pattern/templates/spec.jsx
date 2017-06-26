import React from 'react';
import { mount } from 'enzyme';
import <%= moduleName %> from '<%= patternSrcPath %>';

describe('<<%= moduleName %>>', () => {
  it('says hello', () => {
    const subject = mount(<<%= moduleName %> />);

    expect(subject.text()).toContain('Hello there');
  });
});
