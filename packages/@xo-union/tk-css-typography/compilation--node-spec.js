import css from 'css';

import fonts from '@xo-union/tk-css-typography/lib/fonts';

function getFontFaceRules() {
  const ast = css.parse(this.toString());
  return ast.stylesheet.rules.filter(rule => rule.type === 'font-face');
}

describe('compiled typography', () => {
  describe('fonts', () => {
    it('includes the font-face definitions', () => {
      /* Just a simple spot check that the font-faces are being compiled correctly
       * This makes sure that our webpack build is configured correctly
       **/
      const fontFaceDefinitions = fonts::getFontFaceRules();

      expect(fontFaceDefinitions.length).toBe(3);
    });
  });
});
