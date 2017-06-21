import React from 'react';
import { mount } from 'enzyme';
import { getNodeAt } from '@tests/support/enzyme-component';
import ApplicationSection from './';

describe('<ApplicationSection>', () => {
  it('renders the expected links', () => {
    /* eslint-disable max-len */
    const subject = mount(<ApplicationSection />);

    const links = subject.find('a');

    expect(links::getNodeAt(0).href).toContain('/content');
    expect(links::getNodeAt(0).text).toContain('Wedding Ideas + Etiquette');

    expect(links::getNodeAt(1).href).toContain('/gs/wedding-websites');
    expect(links::getNodeAt(1).text).toContain('Wedding Websites');

    expect(links::getNodeAt(2).href).toContain('/registry');
    expect(links::getNodeAt(2).text).toContain('Registry');

    expect(links::getNodeAt(3).href).toContain('/marketplace');
    expect(links::getNodeAt(3).text).toContain('Marketplace');

    expect(links::getNodeAt(4).href).toContain('//forums.theknot.com');
    expect(links::getNodeAt(4).text).toContain('Community');

    expect(links::getNodeAt(5).href).toContain('/real-weddings/photos');
    expect(links::getNodeAt(5).text).toContain('Real Wedding Photos');

    expect(links::getNodeAt(6).href).toContain('/fashion/wedding-dresses');
    expect(links::getNodeAt(6).text).toContain('Wedding Dresses + Jewelry');

    expect(links::getNodeAt(7).href).toContain('/wedding-invitations');
    expect(links::getNodeAt(7).text).toContain('Wedding Invitations');

    expect(links::getNodeAt(8).href).toContain('/wedding-cakes');
    expect(links::getNodeAt(8).text).toContain('Wedding Cakes');

    expect(links::getNodeAt(9).href).toContain('/groom-groomsmen');
    expect(links::getNodeAt(9).text).toContain('Groom + Groomsmen');

    expect(links::getNodeAt(10).href).toContain('/wedding-on-a-budget');
    expect(links::getNodeAt(10).text).toContain('Wedding on a Budget');

    expect(links::getNodeAt(11).href).toContain('/rehearsal-dinner');
    expect(links::getNodeAt(11).text).toContain('Rehearsal Dinner');

    expect(links::getNodeAt(12).href).toContain('//www.theknotnews.com');
    expect(links::getNodeAt(12).text).toContain('The Knot News');
  });
});
