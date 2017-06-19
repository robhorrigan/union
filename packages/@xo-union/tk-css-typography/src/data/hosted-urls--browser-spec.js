import * as hostedUrls from './hosted-urls';

describe('typography hosted urls', () => {
  it('defines the correct urls', () => {
    expect(hostedUrls.tisaLight).toEqual('//assets.union.theknot.com/fonts/tisa-light-38f.woff');
    expect(hostedUrls.tisaLight2).toEqual('//assets.union.theknot.com/fonts/tisa-light-976.woff2');
    expect(hostedUrls.tisaMedium).toEqual('//assets.union.theknot.com/fonts/tisa-medium-3b4.woff');
    expect(hostedUrls.tisaMedium2).toEqual(
      '//assets.union.theknot.com/fonts/tisa-medium-c3a.woff2');
    expect(hostedUrls.tisaSansRegular).toEqual(
      '//assets.union.theknot.com/fonts/tisa-sans-regular-720.woff');
    expect(hostedUrls.tisaSansRegular2).toEqual(
      '//assets.union.theknot.com/fonts/tisa-sans-regular-b8c.woff2');
  });
});

