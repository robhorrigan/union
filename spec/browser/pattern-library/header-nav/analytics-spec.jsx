import React from 'react';
import { mount } from 'enzyme';
import DesktopHeaderNav from '@xo-union/header-nav/src/components/desktop/HeaderNav';
import HeaderNavAnalytics from '@xo-union/header-nav/src/analytics';

const PRIMARY_MENU_ITEMS = [
  'Local Vendors',
  'Wedding Websites',
  'Registry',
  'Rings + Dresses',
  'Photos',
  'Ideas & Advice',
  'Shop',
  'Tools'
];

const SUB_MENU_SELECTION_VALUE = [
  'Local Vendors > Reception Venues',
  'Local Vendors > Wedding Photographers',
  'Local Vendors > Bridal Salons',
  'Local Vendors > DJs',
  'Local Vendors > Florists',
  'Local Vendors > Wedding Planners',
  'Local Vendors > Jewelers',
  'Local Vendors > Beauty',
  'Local Vendors > Videographers',
  'Local Vendors > Wedding Bands',
  'Local Vendors > See All',

  'Wedding Websites > Create A New Website',
  'Wedding Websites > Manage My Website',
  'Wedding Websites > Find A Couple\'s Wedding Website',

  'Registry > Manage Your Registries',
  'Registry > Find a Registry',
  'Registry > Ultimate Registry Guide',
  'Registry > The Knot Charity Program',

  'Rings + Dresses > Engagement Rings',
  'Rings + Dresses > Wedding Dresses',
  'Rings + Dresses > Bridesmaid Dresses',
  'Rings + Dresses > Mother of the Bride Dresses',
  'Rings + Dresses > Wedding Rings',
  'Rings + Dresses > Flower Girl Dresses',
  'Rings + Dresses > Wedding Accessories',
  'Rings + Dresses > Wedding Jewelry',
  'Rings + Dresses > Menswear + Tuxes',

  'Photos > Wedding Ideas',
  'Photos > Wedding Cakes',
  'Photos > Centerpieces',
  'Photos > Hairstyles',
  'Photos > Bouquets',
  'Photos > See All',

  'Ideas & Advice > Elements of Style',
  'Ideas & Advice > Getting Engaged',
  'Ideas & Advice > Planning 101',
  'Ideas & Advice > Money Matters',
  'Ideas & Advice > Wedding Color + Themes',
  'Ideas & Advice > Wedding Invitations',
  'Ideas & Advice > Fashion + Jewelry',
  'Ideas & Advice > Beauty + Wellness',
  'Ideas & Advice > Registry',
  'Ideas & Advice > Wedding Party',
  'Ideas & Advice > Guests',
  'Ideas & Advice > Destination Weddings',
  'Ideas & Advice > Honeymoons',
  'Ideas & Advice > See All',

  'Shop > Beauty & Hair',
  'Shop > Bridal Party Gifts',
  'Shop > Favors',
  'Shop > Invitations',
  'Shop > Little White Dress',
  'Shop > Personalized Napkins',
  'Shop > Post-Wedding Essentials',
  'Shop > Save The Dates',
  'Shop > Wedding Day Accessories',
  'Shop > Wedding Decor',
  'Shop > Wedding Programs',
  'Shop > See All',

  'Tools > Wedding Website',
  'Tools > Registry',
  'Tools > Guest List Manager',
  'Tools > Checklist',
  'Tools > Budgeter',
  'Tools > Vendor List',
  'Tools > Community',
  'Tools > Account Settings',
  'Tools > Conversations',
  'Tools > Favorites',
  'Tools > Help + Feedback'
];

describe('<HeaderNavAnalytics>', () => {
  let analyticsMock;

  beforeEach(() => {
    analyticsMock = { track: jasmine.createSpy('track') };
  });

  describe('desktop', () => {
    describe('main menu items', () => {
      let subject;
      let mainMenuLinks;

      beforeEach(() => {
        subject = mount(
          <HeaderNavAnalytics product="fashion" analytics={analyticsMock} followStrategy={false}>
            <DesktopHeaderNav />
          </HeaderNavAnalytics>
        );
        mainMenuLinks = subject.find('MainMenuItem > [data-click-role="navigate"]');
      });

      PRIMARY_MENU_ITEMS.forEach((selection, index) => {
        it(`reports "${selection}"`, () => {
          mainMenuLinks.at(index).simulate('click');

          expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
            selection,
            product: 'fashion',
            platform: 'web'
          });
        });
      });
    });

    describe('sub menu items', () => {
      let subject;
      let mainMenuLinks;

      beforeEach(() => {
        subject = mount(
          <HeaderNavAnalytics product="fashion" analytics={analyticsMock} followStrategy={false}>
            <DesktopHeaderNav />
          </HeaderNavAnalytics>
        );
        mainMenuLinks = subject.find('MainMenuItem > SubMenu [data-click-role="navigate"]');
      });

      SUB_MENU_SELECTION_VALUE.forEach((selection, index) => {
        it(`reports "${selection}"`, () => {
          mainMenuLinks.at(index).simulate('click');

          expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
            selection,
            product: 'fashion',
            platform: 'web'
          });
        });
      });
    });
  });
});
