import React from 'react';
import { mount } from 'enzyme';
import FieldsCss from '@xo-union/tk-component-fields/src/css';
import FormTheme from './';

describe('<FormTheme>', () => {
  it('sets the gray theme class by default', () => {
    const subject = mount(<FormTheme />);
    const topLevelNode = subject.find('div').node;

    expect(topLevelNode.classList).toContain(FieldsCss.grayTheme);
  });

  it('sets the white theme class when specified', () => {
    const subject = mount(<FormTheme name="white" />);
    const topLevelNode = subject.find('div').node;

    expect(topLevelNode.classList).toContain(FieldsCss.whiteTheme);
  });
});
