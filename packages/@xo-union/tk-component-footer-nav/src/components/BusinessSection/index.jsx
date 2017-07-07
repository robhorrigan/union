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
      <div className={styles.row}>
        <NavItemList className={styles['business-col']}>
          <XOGroupLinkNavItem />
          <NavLinkItem
            href="/more/about-us"
          >
            About Us
          </NavLinkItem>
          <NavLinkItem
            href={`${XOGROUP_INC_HOST}/xo-group-careers.aspx?${XOGROUP_INC_QUERY}`}
          >
            Careers
          </NavLinkItem>
          <NavLinkItem
            href={`${XOGROUP_INC_INVESTORS_HOST}/?${XOGROUP_INC_QUERY}`}
          >
            Investors
          </NavLinkItem>
          <NavLinkItem
            href={`${XOGROUP_INC_HOST}/press-releases-home.aspx?${XOGROUP_INC_QUERY}`}
          >
            Media
          </NavLinkItem>
          <NavLinkItem
            href="//partnerssignup.theknot.com"
            trackableProps={{ selection: 'advertisers' }}
          >
            Advertise with Us
          </NavLinkItem>
          <li className={styles.divider}>|</li>
          <SisterSitesNavItem />
        </NavItemList>
        <NavItemList className={styles['business-col']}>
          <NavItem className={styles['hide-sm']}>©1997-2017 XO Group Inc.</NavItem>
          <NavLinkItem
            href="/privacy-policy"
          >
            Privacy Policy
          </NavLinkItem>
          <NavLinkItem
            href="/terms-and-conditions"
          >
            Terms of Use
          </NavLinkItem>
          <NavLinkItem
            href="//help.theknot.com/forums/263843-theknot-com-ideas-feedback"
            trackableProps={{ selection: 'send feedback - desktop' }}
          >
            Send Feedback
          </NavLinkItem>
          <NavLinkItem href="//feedback.beta.theknot.com/knowledgebase">
            Customer Service
            <span className={styles['hide-sm']}> + FAQ</span>
          </NavLinkItem>
          <NavLinkItem
            href="//www.thebump.com"
            className={styles['tb-text']}
          >
            The Bump
          </NavLinkItem>
          <NavItem className={styles['hide-sm']}>
            made with
            <Icon name="heart-filled" className={styles['heart-icon']} />
          </NavItem>
        </NavItemList>
      </div>
      <div className={`${styles['copyright-nav-item']}`}>
        <NavItemList className={styles['copyright-col']}>
          <NavItem>©1997-2017 XO Group Inc.</NavItem>
        </NavItemList>
      </div>
    </div>
  );
}
