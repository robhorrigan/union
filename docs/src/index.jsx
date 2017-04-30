import '#docs/_debug-utilities';
/* Global union styles */
import '@xo-union/essentials';
import 'babel-polyfill';
/* Load prism css for syntax highlighting */
import 'prism-themes/themes/prism-ghcolors';

import React from 'react';
import ReactDOM from 'react-dom';

import { init as initializeIcons } from '@xo-union/icons/lib/setup';

import Routes from '#docs/components/Routes';

initializeIcons();

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

