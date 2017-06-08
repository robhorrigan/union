import React from 'react';
import FooterNav, { SEOLinkItem } from '@xo-union/tk-component-footer-nav';
import { Demo } from '#docs/doc-components';

export default function FooterNavDemo() {
  /* eslint-disable no-console */
  return (
    <Demo propOverrides={{ analyticsProps: ({ product }) => (JSON.stringify({ product })) }}>
      <FooterNav
        analyticsProps={{
          product: 'fashion',
          analytics: { track: ::console.log },
          followStrategy: false
        }}
      >
        <SEOLinkItem href="//www.theknot.com/content/bride-time-saving-beauty-hacks">
          Wedding Planning
        </SEOLinkItem>
        <SEOLinkItem href="//www.theknot.com/wedding-dress-shopping">
          Wedding Dress Shopping
        </SEOLinkItem>
        <SEOLinkItem href="//www.theknot.com/wedding-vows-ceremonyt">
          Wedding Vows + Ceremony
        </SEOLinkItem>
        <SEOLinkItem href="//www.theknot.com/wedding-reception-ideas">
          Wedding Reception Ideas
        </SEOLinkItem>
        <SEOLinkItem href="//www.theknot.com/bridesmaids-mother-of-the-bride">
          Bridesmaids + Mother of the Bride
        </SEOLinkItem>
      </FooterNav>
    </Demo>
  );
}
