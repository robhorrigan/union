import '#docs/_debug-utilities';

import React from 'react';
import ReactDOM from 'react-dom';

/* Global union styles */
import '@xo-union/essentials';
import { init as initializeIcons } from '@xo-union/icons/setup';

/* Load prism css for syntax highlighting */
import 'prism-themes/themes/prism-ghcolors';

import Routes from '#docs/components/Routes';

initializeIcons();

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

