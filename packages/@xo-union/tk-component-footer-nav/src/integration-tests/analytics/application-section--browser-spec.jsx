import React from 'react';
import { mount } from 'enzyme';
import FooterNav from '../../';

const assertions = [
  ['Wedding Ideas + Etiquette', 'wedding etiquette'],
  ['Wedding Websites', 'wedding websites'],
  ['Registry', 'registry'],
  ['Marketplace', 'marketplace'],
  ['Community', 'community'],
  ['Real Wedding Photos', 'real wedding photos'],
  ['Wedding Dresses + Jewelry', 'wedding dresses'],
  ['Wedding Invitations', 'wedding invitations'],
  ['Wedding Cakes', 'wedding cakes'],
  ['Groom + Groomsmen', 'groom + groomsmen'],
  ['Wedding on a Budget', 'wedding on a budget'],
  ['Rehearsal Dinner', 'rehearsal dinner'],
  ['The Knot News', 'the knot news']
];

describe('application analytics', () => {
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
        const trackableLinks = subject.find('ApplicationSection a');
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
