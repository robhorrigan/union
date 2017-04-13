import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '#docs/components/Routes';

/* Global union styles */
import '@xo-union/essentials';

/* Load prism css for syntax highlighting */
import 'prism-themes/themes/prism-ghcolors.css';

import { init } from '@xo-union/icons/setup';

init();

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
