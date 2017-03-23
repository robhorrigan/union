import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '#docs/components/Routes';

/* Global union styles */
import '@xo-union/essentials';

/* Load prism css for syntax highlighting */
import 'prism-themes/themes/prism-ghcolors.css';


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
