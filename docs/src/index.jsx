import '#docs/__debug_utilities__';
/* Global union styles */
import '@xo-union/tk-css-essentials';
import 'babel-polyfill';
/* Load prism css for syntax highlighting */
import 'prism-themes/themes/prism-ghcolors';

import React from 'react';
import ReactDOM from 'react-dom';

import HeaderNav from '@xo-union/tk-component-header-nav';

import { init as initializeIcons } from '@xo-union/tk-component-icons/lib/setup';

import Routes from '#docs/components/Routes';

initializeIcons();

/**
 * Documentation hacks
 * Change display name to improve snippet rendering
 */
HeaderNav.displayName = 'HeaderNav';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

