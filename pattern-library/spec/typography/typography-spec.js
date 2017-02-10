import css from 'css';

import globals from '@xo-union/typography/globals';
import fonts from '@xo-union/typography/fonts';
import modules from '@xo-union/typography';

describe('typography', () => {
  describe('globals', () => {
    it('pulls in the fonts', () => {
      expect(globals).toContain(...fonts);
    });
  });

  describe('modules', () => {
    it('pulls in the fonts', () => {
      expect(modules).toContain(...fonts);
    });
  });

  describe('fonts', () => {
    it('includes the font-face definitions', () => {
      /* Just a simple spot check that the font-faces are being compiled correctly
       * This makes sure that our webpack build is configured correctly
       **/
      const fontsCss = css.parse(fonts.toString());
      const fontFaceDefinitions = fontsCss.stylesheet.rules.filter(rule => rule.type === 'font-face');

      expect(fontFaceDefinitions.length).toBe(3);
    });
  });
});
