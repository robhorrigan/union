import React from 'react';
import Icon from '@xo-union/tk-component-icons';
import styles from '@xo-union/tk-component-footer-nav/lib/css';

import NavItemList from '../NavItemList';
import { XOGroupLinkNavItem, SisterSitesNavItem, NavItem, NavLinkItem } from '../NavItems';
import {
  XOGROUP_INC_INVESTORS_HOST,
  XOGROUP_INC_HOST,
  XOGROUP_INC_QUERY
} from '../constants';

export default function BusinessSection() {
  return (
    <div className={styles['business-section']}>
      <NavItemList>
        <XOGroupLinkNavItem data-trackable-selection="xo group" />
        <NavLinkItem
          href="/more/about-us"
          data-trackable-selection="about-us"
        >
          About Us
        </NavLinkItem>
        <NavLinkItem
          href={`${XOGROUP_INC_HOST}/xo-group-careers.aspx?${XOGROUP_INC_QUERY}`}
          data-trackable-selection="careers"
        >
          Careers
        </NavLinkItem>
        <NavLinkItem
          href={`${XOGROUP_INC_INVESTORS_HOST}/?${XOGROUP_INC_QUERY}`}
          data-trackable-selection="investors"
        >
          Investors
        </NavLinkItem>
        <NavLinkItem
          href={`${XOGROUP_INC_HOST}/press-releases-home.aspx?${XOGROUP_INC_QUERY}`}
          data-trackable-selection="media"
        >
          Media
        </NavLinkItem>
        <NavLinkItem href="//partnerssignup.theknot.com" data-trackable-selection="advertisers">
          Advertise with Us
        </NavLinkItem>
        <li className={styles.divider}>|</li>
        <SisterSitesNavItem />
      </NavItemList>
      <NavItemList>
        <NavItem>©1997-2017 XO Group Inc.</NavItem>
        <NavLinkItem
          href="/privacy-policy"
          data-trackable-selection="privacy policy"
        >
          Privacy Policy
        </NavLinkItem>
        <NavLinkItem
          href="/terms-and-conditions"
          data-trackable-selection="terms of use"
        >
          Terms of Use
        </NavLinkItem>
        <NavLinkItem
          href="//help.theknot.com/forums/263843-theknot-com-ideas-feedback"
          data-trackable-selection="send feedback - desktop"
        >
          Send Feedback
        </NavLinkItem>
        <NavLinkItem href="//feedback.beta.theknot.com/knowledgebase" data-trackable>
          Customer Service + FAQ
         </NavLinkItem>
        <NavItem>
          made with
          <Icon name="heart-filled" className={styles['heart-icon']} />
        </NavItem>
      </NavItemList>
    </div>
  );
}
