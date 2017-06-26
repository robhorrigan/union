import React from 'react';
import { mount } from 'enzyme';
import FooterNav from '../../';

const assertions = [
  ['social-facebook', 'facebook'],
  ['social-twitter', 'twitter'],
  ['social-pinterest', 'pinterest'],
  ['social-instagram', 'instagram'],
  ['social-googleplus', 'google plus'],
];

describe('social-section analytics', () => {
  describe('on click', () => {
    assertions.forEach(([iconName, selection], index) => {
      it(`makes expected analytics track call for: ${JSON.stringify(iconName)} icon`, () => {
        const analyticsMock = jasmine.createSpy('track');
        const analyticsProps = {
          analytics: { track: analyticsMock },
          product: 'fashion',
          followStrategy: false
        };
        const subject = mount(<FooterNav analyticsProps={analyticsProps} />);
        const trackableLinks = subject.find('SocialSection a');
        const current = trackableLinks.at(index);
        const currentIconName = trackableLinks.find('Icon').at(index).props().name;

        current.simulate('click');

        expect(currentIconName).toBe(iconName);

        expect(analyticsMock).toHaveBeenCalledWith('Footer Interaction', {
          product: 'fashion',
          platform: 'web',
          selection
        });
      });
    });
  });
});
