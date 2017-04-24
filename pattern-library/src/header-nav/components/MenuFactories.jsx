import React, { PropTypes } from 'react';
import styles from '@xo-union/header-nav/css';
import { Button } from '@xo-union/buttons';
import { path, params } from '../utilities/path-builders';
import { SubMenuLink } from './SubMenu';
import { only, values } from '../utilities/object';

export function LocalVendors({ Template, ...props }) {
  return (
    <Template label="Local Vendors" href="/marketplace" {...props}>
      <SubMenuLink href="/marketplace/wedding-reception-venues"> Reception Venues </SubMenuLink>
      <SubMenuLink href="/marketplace/wedding-photographers"> Wedding Photographers </SubMenuLink>
      <SubMenuLink href="/marketplace/bridal-salons"> Bridal Salons </SubMenuLink>
      <SubMenuLink href="/marketplace/wedding-djs"> DJs </SubMenuLink>
      <SubMenuLink href="/marketplace/florists"> Florists </SubMenuLink>
      <SubMenuLink href="/marketplace/wedding-planners"> Wedding Planners </SubMenuLink>
      <SubMenuLink href="/marketplace/jewelers"> Jewelers </SubMenuLink>
      <SubMenuLink href="/marketplace/beauty-services"> Beauty </SubMenuLink>
      <SubMenuLink href="/marketplace/wedding-videographers"> Videographers </SubMenuLink>
      <SubMenuLink href="/marketplace/live-wedding-bands"> Wedding Bands </SubMenuLink>
      <SubMenuLink href="/marketplace"> See All </SubMenuLink>
    </Template>
  );
}

LocalVendors.propTypes = {
  Template: PropTypes.func.isRequired
};

export function WeddingWebsites({ Template, ...props }) {
  return (
    <Template label="Wedding Websites" href="/gs/wedding-websites" {...props}>
      <SubMenuLink href="/gs/wedding-websites"> Create A New Website </SubMenuLink>
      <SubMenuLink href="/gs/dashboard"> Manage My Website </SubMenuLink>
      <SubMenuLink href="/registry/couplesearch"> {"Find A Couple's Wedding Website"} </SubMenuLink>
    </Template>
  );
}

WeddingWebsites.propTypes = {
  Template: PropTypes.func.isRequired
};

export function Registry({ Template, ...props }) {
  return (
    <Template label="Registry" href="/registry" {...props}>
      <SubMenuLink href="/registry"> Manage Your Registries </SubMenuLink>
      <SubMenuLink href="/registry/couplesearch"> Find a Registry </SubMenuLink>
      <SubMenuLink href="/interactive-registry-guide"> Ultimate Registry Guide </SubMenuLink>
      <SubMenuLink href="/registry/charity"> The Knot Charity Program </SubMenuLink>
    </Template>
  );
}

Registry.propTypes = {
  Template: PropTypes.func.isRequired
};

export function Fashion({ Template, ...props }) {
  return (
    <Template label="Rings + Dresses" href="/fashion/wedding-dresses" {...props}>
      <SubMenuLink href="/fashion/engagement-rings"> Engagement Rings </SubMenuLink>
      <SubMenuLink href="/fashion/wedding-dresses"> Wedding Dresses </SubMenuLink>
      <SubMenuLink href="/fashion/bridesmain-dresses"> Bridesmaid Dresses </SubMenuLink>
      <SubMenuLink href="/fashion/mother-of-the-bride-dresses">
        Mother of the Bride Dresses
      </SubMenuLink>
      <SubMenuLink href="/fashion/wedding-rings"> Wedding Rings </SubMenuLink>
      <SubMenuLink href="/fashion/flower-girl-dresses"> Flower Girl Dresses </SubMenuLink>
      <SubMenuLink href="/fashion/wedding-accessories"> Wedding Accessories </SubMenuLink>
      <SubMenuLink href="/fashion/wedding-jewelry"> Wedding Jewelry </SubMenuLink>
      <SubMenuLink href="/fashion/tuxedos"> Menswear + Tuxes </SubMenuLink>
    </Template>
  );
}

Fashion.propTypes = {
  Template: PropTypes.func.isRequired
};

export function RealWeddings({ Template, ...props }) {
  return (
    <Template label="Photos" href="/real-weddings/photos" {...props}>
      <SubMenuLink href="/real-weddings/photos"> Wedding Ideas </SubMenuLink>
      <SubMenuLink href="/real-weddings/wedding-cakes-photos"> Wedding Cakes </SubMenuLink>
      <SubMenuLink href="/real-weddings/wedding-centerpieces-photos"> Centerpieces </SubMenuLink>
      <SubMenuLink href="/real-weddings/wedding-hairstyles-photos"> Hairstyles </SubMenuLink>
      <SubMenuLink href="/real-weddings/wedding-bouquts-photos"> Bouquets </SubMenuLink>
      <SubMenuLink href="/real-weddings/photos"> See All </SubMenuLink>
    </Template>
  );
}

RealWeddings.propTypes = {
  Template: PropTypes.func.isRequired
};

export function Content({ Template, ...props }) {
  return (
    <Template label="Ideas & Advice" href="/content" {...props}>
      <SubMenuLink href="/partnerships/macys-elements-of-style">
        <img alt="" src="http://media-api.theknot.com/images/217f19ac-c625-40fd-b1de-4034756f435c~rs_w.50?quality=100" />
        Elements of Style
      </SubMenuLink>
      <SubMenuLink href="/content/getting-engaged-advice"> Getting Engaged </SubMenuLink>
      <SubMenuLink href="/content/wedding-planning-advice"> Planning 101 </SubMenuLink>
      <SubMenuLink href="/content/wedding-budgeting-advice"> Money Matters </SubMenuLink>
      <SubMenuLink href="/content/wedding-style-theme-advice"> Wedding Color + Themes </SubMenuLink>
      <SubMenuLink href="/content/invitations-and-paper-advice"> Wedding Invitations </SubMenuLink>
      <SubMenuLink href="/content/wedding-fashion-advice"> Fashion + Jewelry </SubMenuLink>
      <SubMenuLink href="/content/wedding-beauty-advice"> Beauty + Wellness </SubMenuLink>
      <SubMenuLink href="/content/registry-advice"> Registry </SubMenuLink>
      <SubMenuLink href="/content/wedding-party-advice"> Wedding Party </SubMenuLink>
      <SubMenuLink href="/content/guests-and-guest-list-advice"> Guests </SubMenuLink>
      <SubMenuLink href="/content/destination-wedding-advice"> Destination Weddings </SubMenuLink>
      <SubMenuLink href="/content/honeymoon-advice"> Honeymoons </SubMenuLink>
      <SubMenuLink href="/content/all"> See All </SubMenuLink>
    </Template>
  );
}

Content.propTypes = {
  Template: PropTypes.func.isRequired
};

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

export function Shop({ Template, ...props }) {
  const shopHost = 'https://shop.theknot.com';
  const weddingShopHost = 'https://weddingshop.theknot.com';

  return (
    <Template label="Shop" href={shopHost::trackingParams({ isSubCategory: false })} {...props}>
      <SubMenuLink href={weddingShopHost::path('beauty')}> Beauty & Hair </SubMenuLink>
      <SubMenuLink href={weddingShopHost::path('gifts')::trackingParams()} >
        Bridal Party Gifts
      </SubMenuLink>
      <SubMenuLink
        href={weddingShopHost::path('favors', 'wedding-favors-by-feature')::trackingParams()}
      >
        Favors
      </SubMenuLink>
      <SubMenuLink href={shopHost::stationaryPath(200)} >
        Invitations
      </SubMenuLink>
      <SubMenuLink href={shopHost::path('dresses')} >
        Little White Dress
      </SubMenuLink>
      <SubMenuLink
        href={weddingShopHost::path('reception', 'personalized-paper-napkins')::trackingParams()}
      >
        Personalized Napkins
      </SubMenuLink>
      <SubMenuLink href={shopHost::path('post-wedding-essentials')} >
        Post-Wedding Essentials
      </SubMenuLink>
      <SubMenuLink href={shopHost::stationaryPath(201)} >
        Save The Dates
      </SubMenuLink>
      <SubMenuLink href={shopHost::path('accessories')} >
        Wedding Day Accessories
      </SubMenuLink>
      <SubMenuLink
        href={weddingShopHost::path('decor', 'wedding-table-decorations')::trackingParams()}
      >
        Wedding Decor
      </SubMenuLink>
      <SubMenuLink href={shopHost::stationaryPath(202)} >
        Wedding Programs
      </SubMenuLink>
      <SubMenuLink href={shopHost} >
        See All
      </SubMenuLink>
    </Template>
  );
}

Shop.propTypes = {
  Template: PropTypes.func.isRequired
};

function AccountMenuItem() {
  return (
    <li className={styles['sub-menu-account-item']}>
      <Button className={styles['sub-menu-account-item-primary-button']} size="baby" isCTA block>
        SIGN UP
      </Button>
      Already a member?
      <Button size="baby" color="tertiary" isCTA>
        LOG IN
      </Button>
    </li>
  );
}

export function Tools({ Template, loggedIn, ...props }) {
  return (
    <Template label="Tools" href="/dashboard" {...props}>
      {loggedIn ? null : <AccountMenuItem />}
      <SubMenuLink href="/gs/wedding-websites"> Wedding Website </SubMenuLink>
      <SubMenuLink href="/registry"> Registry </SubMenuLink>
      <SubMenuLink href="/gs/guest-list-manager"> Guest List Manager </SubMenuLink>
      <SubMenuLink href="/wedding-checklist"> Checklist </SubMenuLink>
      <SubMenuLink href="/wedding-budget"> Budgeter </SubMenuLink>
      <SubMenuLink href="/wedding-vendors"> Vendor List </SubMenuLink>
      <SubMenuLink href="http://forums.theknot.com"> Community </SubMenuLink>
      <SubMenuLink href="/account/settings/profile"> Account Settings </SubMenuLink>
      <SubMenuLink href="/inbox"> Conversations </SubMenuLink>
      <SubMenuLink href="/boards"> Favorites </SubMenuLink>
      <SubMenuLink href="http://feedback.beta.theknot.com/knowledgebase"> Help + Feedback </SubMenuLink>
      {loggedIn ? <SubMenuLink role="button">Log Out</SubMenuLink> : null}
    </Template>
  );
}

Tools.propTypes = {
  Template: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

export function topLevelFactories() {
  return this::only(
    'LocalVendors',
    'WeddingWebsites',
    'Registry',
    'Fashion',
    'RealWeddings',
    'Content',
    'Shop'
  )::values();
}
