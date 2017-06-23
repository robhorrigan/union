import React from 'react';
import HeaderNav, { SubNav, SubNavLinkItem } from '@xo-union/tk-component-header-nav';
import DemoWithAnalytics from '@components/DemoWithAnalytics';
import analyticsProps from '@stubs/analyticsProps';

export default function HeaderNavWithSubNavDemo() {
  return (
    <DemoWithAnalytics>
      <div>
        <HeaderNav analyticsProps={analyticsProps} />
        <SubNav analyticsProps={analyticsProps} >
          <SubNavLinkItem href="/partnerships/macys-elements-of-style">
            <img alt="" src="http://media-api.theknot.com/images/217f19ac-c625-40fd-b1de-4034756f435c~rs_w.50?quality=100" />
            Elements of Style
          </SubNavLinkItem>
          <SubNavLinkItem href="/registry">
            Registry
          </SubNavLinkItem>
          <SubNavLinkItem href="/gs/guest-list-manager">
            Guest List Manager
          </SubNavLinkItem>
          <SubNavLinkItem href="/wedding-checklist">
            Checklist
          </SubNavLinkItem>
          <SubNavLinkItem href="/wedding-budget">
            Budgeter
          </SubNavLinkItem>
          <SubNavLinkItem href="/wedding-vendors">
            Vendor List
          </SubNavLinkItem>
          <SubNavLinkItem
            href="/boards"
            data-trackable-selection="(Optional) To override selection value in analytics call"
          >
            Favorites
          </SubNavLinkItem>
        </SubNav>
      </div>
    </DemoWithAnalytics>
  );
}
