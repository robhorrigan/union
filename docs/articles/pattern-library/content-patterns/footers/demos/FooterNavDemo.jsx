import React from 'react';
import FooterNav, { CustomLinkItem, CustomSection } from '@xo-union/tk-component-footer-nav';
import DemoWithAnalytics from '@components/DemoWithAnalytics';
import analyticsProps from '@stubs/analyticsProps';

export default function FooterNavDemo() {
  /* eslint-disable no-console */
  return (
    <DemoWithAnalytics>
      <div>
        <CustomSection analyticsProps={analyticsProps}>
          <CustomLinkItem href="//www.theknot.com/content/bride-time-saving-beauty-hacks">
            Wedding Planning
          </CustomLinkItem>
          <CustomLinkItem href="//www.theknot.com/wedding-dress-shopping">
            Wedding Dress Shopping
          </CustomLinkItem>
          <CustomLinkItem href="//www.theknot.com/wedding-vows-ceremonyt">
            Wedding Vows + Ceremony
          </CustomLinkItem>
          <CustomLinkItem href="//www.theknot.com/wedding-reception-ideas">
            Wedding Reception Ideas
          </CustomLinkItem>
          <CustomLinkItem
            href="//www.theknot.com/bridesmaids-mother-of-the-bride"
            trackableProps={{ selection: '(Optional) Override the tracked selection value' }}
          >
            Bridesmaids + Mother of the Bride
          </CustomLinkItem>
        </CustomSection>
        <FooterNav analyticsProps={analyticsProps} />
      </div>
    </DemoWithAnalytics>
  );
}
