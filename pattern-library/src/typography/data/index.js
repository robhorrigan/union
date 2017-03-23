import { tisaLightHash, tisaMediumHash, tisaSansHash } from './hashes';

function createTypographyData({
  tisaLight,
  tisaLight2,
  tisaMedium,
  tisaMedium2,
  tisaSansRegular,
  tisaSansRegular2
}) {
  return {
    /* Use hashes in font names */
    'serif-family-name': `tisa-${tisaLightHash}-${tisaMediumHash}`,
    'sans-serif-family-name': `tisa-sans-${tisaSansHash}`,
    /* Tisa urls */
    'tisa-light-woff2-url': tisaLight2,
    'tisa-light-woff-url': tisaLight,
    'tisa-med-woff2-url': tisaMedium2,
    'tisa-med-woff-url': tisaMedium,
    'tisa-sans-woff-url': tisaSansRegular,
    'tisa-sans-woff2-url': tisaSansRegular2
  };
}

const urls = (ENV === 'production') ? require('./hosted-urls') : require('./data-urls');

module.exports = createTypographyData(urls);
