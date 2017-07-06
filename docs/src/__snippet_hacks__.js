import HeaderNav, { SubNavLinkItem } from '@xo-union/tk-component-header-nav';
import { CustomLinkItem } from '@xo-union/tk-component-footer-nav';
import * as Fields from '@xo-union/tk-component-fields';
import has from 'xojs/lib/object/has';


function normalizeDisplayName(components) {
  for (const componentName in components) {
    if (components::has(componentName)) {
      components[componentName].displayName = componentName;
    }
  }
}

/**
 * Documentation hacks
 * Change display name to improve snippet rendering
 */
normalizeDisplayName({
  HeaderNav,
  CustomLinkItem,
  SubNavLinkItem,
  ...Fields
});
