import React from 'react';
import styles from '@xo-union/header-nav/css';
import { Button } from '@xo-union/buttons';
import { path, params } from '../utilities/path-builders';
import { MenuLink, NavLinkWithMenu } from './NavItem';

export function LocalVendors() {
  return (
    <NavLinkWithMenu label="Local Vendors" url="/marketplace">
      <MenuLink href="/marketplace/wedding-reception-venues"> Reception Venues </MenuLink>
      <MenuLink href="/marketplace/wedding-photographers"> Wedding Photographers </MenuLink>
      <MenuLink href="/marketplace/bridal-salons"> Bridal Salons </MenuLink>
      <MenuLink href="/marketplace/wedding-djs"> DJs </MenuLink>
      <MenuLink href="/marketplace/florists"> Florists </MenuLink>
      <MenuLink href="/marketplace/wedding-planners"> Wedding Planners </MenuLink>
      <MenuLink href="/marketplace/jewelers"> Jewelers </MenuLink>
      <MenuLink href="/marketplace/beauty-services"> Beauty </MenuLink>
      <MenuLink href="/marketplace/wedding-videographers"> Videographers </MenuLink>
      <MenuLink href="/marketplace/live-wedding-bands"> Wedding Bands </MenuLink>
      <MenuLink href="/marketplace"> See All </MenuLink>
    </NavLinkWithMenu>
  );
}
export function WeddingWebsites() {
  return (
    <NavLinkWithMenu label="Wedding Websites" url="/gs/wedding-websites">
      <MenuLink href="/gs/wedding-websites"> Create A New Website </MenuLink>
      <MenuLink href="/gs/dashboard"> Manage My Website </MenuLink>
      <MenuLink href="/registry/couplesearch"> {"Find A Couple's Wedding Website"} </MenuLink>
    </NavLinkWithMenu>
  );
}
export function Registry() {
  return (
    <NavLinkWithMenu label="Registry" url="/registry">
      <MenuLink href="/registry"> Manage Your Registries </MenuLink>
      <MenuLink href="/registry/couplesearch"> Find a Registry </MenuLink>
      <MenuLink href="/interactive-registry-guide"> Ultimate Registry Guide </MenuLink>
      <MenuLink href="/registry/charity"> The Knot Charity Program </MenuLink>
    </NavLinkWithMenu>
  );
}

export function Fashion() {
  return (
    <NavLinkWithMenu label="Rings + Dresses" url="/fashion/wedding-dresses">
      <MenuLink href="/fashion/engagement-rings"> Engagement Rings </MenuLink>
      <MenuLink href="/fashion/wedding-dresses"> Wedding Dresses </MenuLink>
      <MenuLink href="/fashion/bridesmain-dresses"> Bridesmaid Dresses </MenuLink>
      <MenuLink href="/fashion/mother-of-the-bride-dresses">
        Mother of the Bride Dresses
      </MenuLink>
      <MenuLink href="/fashion/wedding-rings"> Wedding Rings </MenuLink>
      <MenuLink href="/fashion/flower-girl-dresses"> Flower Girl Dresses </MenuLink>
      <MenuLink href="/fashion/wedding-accessories"> Wedding Accessories </MenuLink>
      <MenuLink href="/fashion/wedding-jewelry"> Wedding Jewelry </MenuLink>
      <MenuLink href="/fashion/tuxedos"> Menswear + Tuxes </MenuLink>
    </NavLinkWithMenu>
  );
}
export function RealWeddings() {
  return (
    <NavLinkWithMenu label="Photos" url="/real-weddings/photos">
      <MenuLink href="/real-weddings/photos"> Wedding Ideas </MenuLink>
      <MenuLink href="/real-weddings/wedding-cakes-photos"> Wedding Cakes </MenuLink>
      <MenuLink href="/real-weddings/wedding-centerpieces-photos"> Centerpieces </MenuLink>
      <MenuLink href="/real-weddings/wedding-hairstyles-photos"> Hairstyles </MenuLink>
      <MenuLink href="/real-weddings/wedding-bouquts-photos"> Bouquets </MenuLink>
      <MenuLink href="/real-weddings/photos"> See All </MenuLink>
    </NavLinkWithMenu>
  );
}

export function Content() {
  return (
    <NavLinkWithMenu label="Ideas & Advice" url="/content">
      <MenuLink href="/partnerships/macys-elements-of-style">
        <img src="http://media-api.theknot.com/images/217f19ac-c625-40fd-b1de-4034756f435c~rs_w.50?quality=100" />
        Elements of Style
      </MenuLink>
      <MenuLink href="/content/getting-engaged-advice"> Getting Engaged </MenuLink>
      <MenuLink href="/content/wedding-planning-advice"> Planning 101 </MenuLink>
      <MenuLink href="/content/wedding-budgeting-advice"> Money Matters </MenuLink>
      <MenuLink href="/content/wedding-style-theme-advice"> Wedding Color + Themes </MenuLink>
      <MenuLink href="/content/invitations-and-paper-advice"> Wedding Invitations </MenuLink>
      <MenuLink href="/content/wedding-fashion-advice"> Fashion + Jewelry </MenuLink>
      <MenuLink href="/content/wedding-beauty-advice"> Beauty + Wellness </MenuLink>
      <MenuLink href="/content/registry-advice"> Registry </MenuLink>
      <MenuLink href="/content/wedding-party-advice"> Wedding Party </MenuLink>
      <MenuLink href="/content/guests-and-guest-list-advice"> Guests </MenuLink>
      <MenuLink href="/content/destination-wedding-advice"> Destination Weddings </MenuLink>
      <MenuLink href="/content/honeymoon-advice"> Honeymoons </MenuLink>
      <MenuLink href="/content/all"> See All </MenuLink>
    </NavLinkWithMenu>
  );
}

/* Additional path builders used on the Shop NavItem */
function trackingParams({ isSubCategory = true } = {}) {
  const utmCampaign = isSubCategory ? 'topnavsubcat' : 'topnav';

  return this::params({
    utm_source: 'theknot.com',
    utm_medium: 'referral',
    utm_campaign: utmCampaign
  });
}

function stationaryPath(categoryId) {
  return this::path('stationery')::params({ category_id: categoryId });
}

export function Shop() {
  const shopHost = 'https://shop.theknot.com';
  const weddingShopHost = 'https://weddingshop.theknot.com';

  return (
    <NavLinkWithMenu label="Shop" url={shopHost::trackingParams({ isSubCategory: false })}>
      <MenuLink href={weddingShopHost::path('beauty')}> Beauty & Hair </MenuLink>
      <MenuLink href={weddingShopHost::path('gifts')::trackingParams()} >
        Bridal Party Gifts
      </MenuLink>
      <MenuLink href={weddingShopHost::path('favors', 'wedding-favors-by-feature')::trackingParams()} >
        Favors
      </MenuLink>
      <MenuLink href={shopHost::stationaryPath(200)} >
        Invitations
      </MenuLink>
      <MenuLink href={shopHost::path('dresses')} >
        Little White Dress
      </MenuLink>
      <MenuLink href={weddingShopHost::path('reception', 'personalized-paper-napkins')::trackingParams()} >
        Personalized Napkins
      </MenuLink>
      <MenuLink href={shopHost::path('post-wedding-essentials')} >
        Post-Wedding Essentials
      </MenuLink>
      <MenuLink href={shopHost::stationaryPath(201)} >
        Save The Dates
      </MenuLink>
      <MenuLink href={shopHost::path('accessories')} >
        Wedding Day Accessories
      </MenuLink>
      <MenuLink href={weddingShopHost::path('decor', 'wedding-table-decorations')::trackingParams()} >
        Wedding Decor
      </MenuLink>
      <MenuLink href={shopHost::stationaryPath(202)} >
        Wedding Programs
      </MenuLink>
      <MenuLink href={shopHost} >
        See All
      </MenuLink>
    </NavLinkWithMenu>
  );
}

function AccountMenuItem() {
  return (
    <li className={styles['account-menu-item']}>
      <Button className={styles['account-menu-item-primary-button']} size="baby" isCTA block>
        SIGN UP
      </Button>
      Already a member?
      <Button size="baby" color="tertiary" isCTA>
        LOG IN
      </Button>
    </li>
  );
}

export function Tools({ loggedIn }) {
  return (
    <NavLinkWithMenu label="Tools" url="/dashboard" pushedToRight>
      { loggedIn ? null : <AccountMenuItem /> }
      <MenuLink href="/gs/wedding-websites"> Wedding Website </MenuLink>
      <MenuLink href="/registry"> Registry </MenuLink>
      <MenuLink href="/gs/guest-list-manager"> Guest List Manager </MenuLink>
      <MenuLink href="/wedding-checklist"> Checklist </MenuLink>
      <MenuLink href="/wedding-budget"> Budgeter </MenuLink>
      <MenuLink href="/wedding-vendors"> Vendor List </MenuLink>
      <MenuLink href="http://forums.theknot.com"> Community </MenuLink>
      <MenuLink href="/account/settings/profile"> Account Settings </MenuLink>
      <MenuLink href="/inbox"> Conversations </MenuLink>
      <MenuLink href="/boards"> Favorites </MenuLink>
      <MenuLink href="http://feedback.beta.theknot.com/knowledgebase"> Help + Feedback </MenuLink>
      { loggedIn ? <MenuLink href="#">Log Out</MenuLink> : null }
    </NavLinkWithMenu>
  );
}
