import React from 'react';
import { mount } from 'enzyme';
import HeaderNav from '../../';

const PRIMARY_MENU_ITEMS = [
  'local vendors',
  'wedding websites',
  'registry',
  'rings + dresses',
  'photos',
  'ideas & advice',
  'shop',
  'tools'
];

const SUB_MENU_SELECTION_VALUE = [
  'local vendors > reception venues',
  'local vendors > wedding photographers',
  'local vendors > bridal salons',
  'local vendors > djs',
  'local vendors > florists',
  'local vendors > wedding planners',
  'local vendors > jewelers',
  'local vendors > beauty',
  'local vendors > videographers',
  'local vendors > wedding bands',
  'local vendors > see all',

  'wedding websites > create a new website',
  'wedding websites > manage my website',
  'wedding websites > find a couple\'s wedding website',

  'registry > manage your registries',
  'registry > find a registry',
  'registry > ultimate registry guide',
  'registry > the knot charity program',

  'rings + dresses > engagement rings',
  'rings + dresses > wedding dresses',
  'rings + dresses > bridesmaid dresses',
  'rings + dresses > mother of the bride dresses',
  'rings + dresses > wedding rings',
  'rings + dresses > flower girl dresses',
  'rings + dresses > wedding accessories',
  'rings + dresses > wedding jewelry',
  'rings + dresses > menswear + tuxes',

  'photos > wedding ideas',
  'photos > wedding cakes',
  'photos > centerpieces',
  'photos > hairstyles',
  'photos > bouquets',
  'photos > see all',

  'ideas & advice > elements of style',
  'ideas & advice > getting engaged',
  'ideas & advice > planning 101',
  'ideas & advice > money matters',
  'ideas & advice > wedding color + themes',
  'ideas & advice > wedding invitations',
  'ideas & advice > fashion + jewelry',
  'ideas & advice > beauty + wellness',
  'ideas & advice > registry',
  'ideas & advice > wedding party',
  'ideas & advice > guests',
  'ideas & advice > destination weddings',
  'ideas & advice > honeymoons',
  'ideas & advice > see all',

  'shop > beauty & hair',
  'shop > bridal party gifts',
  'shop > favors',
  'shop > invitations',
  'shop > little white dress',
  'shop > personalized napkins',
  'shop > post-wedding essentials',
  'shop > save the dates',
  'shop > wedding day accessories',
  'shop > wedding decor',
  'shop > wedding programs',
  'shop > see all',

  'tools > wedding website',
  'tools > registry',
  'tools > guest list manager',
  'tools > checklist',
  'tools > budgeter',
  'tools > vendor list',
  'tools > community',
  'tools > account settings',
  'tools > conversations',
  'tools > favorites',
  'tools > help + feedback'
];

describe('<HeaderNav>', () => {
  let analyticsMock;
  let analyticsProps;

  beforeEach(() => {
    analyticsMock = { track: jasmine.createSpy('track') };
    analyticsProps = { product: 'fashion', analytics: analyticsMock, followStrategy: false };
  });

  describe('desktop', () => {
    describe('main menu items', () => {
      let subject;
      let mainMenuLinks;

      beforeEach(() => {
        subject = mount(
          <HeaderNav analyticsProps={analyticsProps} />
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
          <HeaderNav analyticsProps={analyticsProps} />
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
