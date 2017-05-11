import React from 'react';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import NavItemList from '../NavItemList';
import { NavLinkItem } from '../NavItems';

export default function ApplicationSection() {
  return (
    <NavItemList className={styles['application-section']}>
      <NavLinkItem href="/content">
        Wedding Ideas + Etiquette
      </NavLinkItem>
      <NavLinkItem href="/gs/wedding-websites">
        Wedding Websites
      </NavLinkItem>
      <NavLinkItem href="/registry">
        Registry
      </NavLinkItem>
      <NavLinkItem href="/marketplace">
        Marketplace
      </NavLinkItem>
      <NavLinkItem href="//forums.theknot.com">
        Community
      </NavLinkItem>
      <NavLinkItem href="/real-weddings/photos">
        Real Wedding Photos
      </NavLinkItem>
      <NavLinkItem href="/fashion/wedding-dresses">
        Wedding Dresses + Jewelry
      </NavLinkItem>
      <NavLinkItem href="/wedding-invitations">
        Wedding Invitations
      </NavLinkItem>
      <NavLinkItem href="/wedding-cakes">
        Wedding Cakes
      </NavLinkItem>
      <NavLinkItem href="/groom-groomsmen">
        Groom + Groomsmen
      </NavLinkItem>
      <NavLinkItem href="/wedding-on-a-budget">
        Wedding on a Budget
      </NavLinkItem>
      <NavLinkItem href="/rehearsal-dinner">
        Rehearsal Dinner
      </NavLinkItem>
      <NavLinkItem href="http://www.theknotnews.com">
        The Knot News
      </NavLinkItem>
    </NavItemList>
  );
}
