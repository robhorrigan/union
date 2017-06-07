import React from 'react';
import { mount } from 'enzyme';
import FooterNav from '../../';

const assertions = [
  ['Customer Service + FAQ', 'Customer Service + FAQ'],
  []
];

fdescribe('business-section analytics', () => {
  describe('on click', () => {
    assertions.forEach(([ text, selection ], index) => {
      it(`makes expected analytics track calls for ${JSON.stringify(text)}`, () => {
        const spy = jasmine.createSpy('track');
        const analyticsProps = { analytics: { track: spy }, product: 'fashion' };
        const subject = mount(<FooterNav analyticsProps={analyticsProps} />);

        const trackableLinks = subject.find('[data-trackable],[data-trackable-selection]');

        const current = trackableLinks.at(index)
        current.simulate('click');

        expect(current.text()).toBe(text)
        expect(spy).toHaveBeenCalledWith('Footer Interaction', {
          product: 'fashion',
          platform: 'web',
          selection
        });
      });
    });
  });
});
