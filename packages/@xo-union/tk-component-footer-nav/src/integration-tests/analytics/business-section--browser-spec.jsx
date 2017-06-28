import React from 'react';
import { mount } from 'enzyme';
import FooterNav from '../../';

const assertions = [
  ['', 'xo group'],
  ['About Us', 'about us'],
  ['Careers', 'careers'],
  ['Investors', 'investors'],
  ['Media', 'media'],
  ['Advertise with Us', 'advertisers'],
  ['', 'thebump'],
  ['GigMasters', 'gig masters'],
  ['Privacy Policy', 'privacy policy'],
  ['Terms of Use', 'terms of use'],
  ['Send Feedback', 'send feedback - desktop'],
  ['Customer Service + FAQ', 'customer service + faq']
];

describe('business-section analytics', () => {
  describe('on click', () => {
    assertions.forEach(([text, selection], index) => {
      it(`makes expected analytics track call for: ${JSON.stringify(text || selection)}`, () => {
        const analyticsMock = jasmine.createSpy('track');
        const analyticsProps = {
          analytics: { track: analyticsMock },
          product: 'fashion',
          followStrategy: false
        };
        const subject = mount(<FooterNav analyticsProps={analyticsProps} />);
        const trackableLinks = subject.find('BusinessSection a');
        const current = trackableLinks.at(index);
        current.simulate('click');

        expect(current.text()).toBe(text);

        expect(analyticsMock).toHaveBeenCalledWith('Footer Interaction', {
          product: 'fashion',
          platform: 'web',
          selection
        });
      });
    });
  });
});
