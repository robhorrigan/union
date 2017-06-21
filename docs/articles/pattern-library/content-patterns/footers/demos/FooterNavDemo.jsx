import React from 'react';
import FooterNav, { CustomLinkItem, CustomSection } from '@xo-union/tk-component-footer-nav';
import Demo from '@components/Demo';

export default function FooterNavDemo() {
  /* eslint-disable no-console */
  return (
    <Demo propOverrides={{ analyticsProps: ({ product }) => (JSON.stringify({ product })) }}>
      <div>
        <CustomSection>
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
          <CustomLinkItem href="//www.theknot.com/bridesmaids-mother-of-the-bride">
            Bridesmaids + Mother of the Bride
        </CustomLinkItem>
        </CustomSection>
        <FooterNav
          analyticsProps={{
            product: 'fashion',
            analytics: { track: ::console.log },
            followStrategy: false
          }}
        />
      </div>
    </Demo>
  );
}
