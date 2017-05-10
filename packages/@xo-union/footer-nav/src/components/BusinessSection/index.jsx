import React from 'react';
import toQueryString from 'xojs/lib/object/toQueryString';
import Icon from '@xo-union/icons';
import styles from '@xo-union/footer-nav/lib/css';

import NavItemList from '../NavItemList';
import { SisterSitesNavItem, NavItem, LogoLinkItem, NavLinkItem } from '../NavItems';

const XOGROUP_INC_HOST = '//www.xogroupinc.com';
const XOGROUP_INC_INVESTORS_HOST = '//ir.xogroupinc.com';
const XOGROUP_INC_QUERY = {
  __hstc: '131446032.cf51d70e35247434d01673c8dab3aa11.1472494787190.1493912032584.1493924757678.74',
  __hssc: '131446032.1.1493924757678',
  __hsfp: '711516163'
}::toQueryString();

export default function BusinessSection() {
  return (
    <div className={styles['business-section']}>
      <NavItemList>
        <LogoLinkItem
          name="xo-logo"
          href={`${XOGROUP_INC_HOST}/xo-group-company.aspx?${XOGROUP_INC_QUERY}`}
        />
        <NavLinkItem href="/more/about-us">About Us</NavLinkItem>
        <NavLinkItem href={`${XOGROUP_INC_HOST}/xo-group-careers.aspx?${XOGROUP_INC_QUERY}`}>
          Careers
        </NavLinkItem>
        <NavLinkItem href={`${XOGROUP_INC_INVESTORS_HOST}/?${XOGROUP_INC_QUERY}`}>
          Investors
        </NavLinkItem>
        <NavLinkItem href={`${XOGROUP_INC_HOST}/press-releases-home.aspx?${XOGROUP_INC_QUERY}`}>
          Media
        </NavLinkItem>
        <NavLinkItem href="//partnerssignup.theknot.com">
          Advertise with Us
        </NavLinkItem>
        <li className={styles.divider}>|</li>
        <SisterSitesNavItem />
      </NavItemList>
      <NavItemList>
        <NavItem>©1997-2017 XO Group Inc.</NavItem>
        <NavLinkItem href="/privacy-policy">Privacy Policy</NavLinkItem>
        <NavLinkItem href="/terms-and-conditions">Terms of Use</NavLinkItem>
        <NavLinkItem href="//help.theknot.com/forums/263843-theknot-com-ideas-feedback">
          Send Feedback
        </NavLinkItem>
        <NavLinkItem href="//feedback.beta.theknot.com/knowledgebase">
          Customer Service + FAQ
         </NavLinkItem>
        <NavItem>
          made with
          <Icon name="heart" className={styles['heart-icon']} />
        </NavItem>
      </NavItemList>
    </div>
  );
}
