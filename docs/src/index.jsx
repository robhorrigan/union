/* eslint-disable import/first */
import './__debug_utilities__';
import './__snippet_hacks__';

/* Global union styles */
import '@xo-union/tk-css-essentials';
import 'babel-polyfill';
import 'whatwg-fetch';
/* Load prism css for syntax highlighting */
import 'prism-themes/themes/prism-ghcolors';

import React from 'react';
import ReactDOM from 'react-dom';

import { init as initializeIcons } from '@xo-union/tk-component-icons/lib/setup';

import App from '#docs/components/App';
import { Provider } from 'react-redux';
import store from './store';

initializeIcons();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

