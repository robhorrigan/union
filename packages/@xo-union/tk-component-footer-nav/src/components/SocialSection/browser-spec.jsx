import React from 'react';
import { mount } from 'enzyme';
import SocialSection from './';
import toBeSocialLink from './spec/matchers';

describe('<SocialSection>', () => {
  beforeAll(() => {
    jasmine.addMatchers({ toBeSocialLink });
  });

  it('renders all social links', () => {
    const subject = mount(<SocialSection />);
    const links = subject.find('a');

    expect(links.at(0)).toBeSocialLink('facebook');
    expect(links.at(1)).toBeSocialLink('twitter');
    expect(links.at(2)).toBeSocialLink('pinterest');
    expect(links.at(3)).toBeSocialLink('instagram');
    expect(links.at(4)).toBeSocialLink('googleplus', 'https://plus.google.com/+TheKnot');
  });
});
