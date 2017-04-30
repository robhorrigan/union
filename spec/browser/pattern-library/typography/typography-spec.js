import css from 'css';

import globals from '@xo-union/typography/lib/globals';
import fonts from '@xo-union/typography/lib/fonts';
import modules from '@xo-union/typography';

function getFontFaceRules(cssString) {
  const ast = css.parse(cssString);
  return ast.stylesheet.rules.filter(rule => rule.type === 'font-face');
}

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
      const fontFaceDefinitions = getFontFaceRules(fonts.toString());

      expect(fontFaceDefinitions.length).toBe(3);
    });
  });
});
