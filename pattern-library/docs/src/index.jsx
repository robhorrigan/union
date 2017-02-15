import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '#docs/components/Routes';

/* Import bootstrap css globals */
import '@xo-union/bootstrap';
import '@xo-union/typography/globals';
/* Load prism css for syntax highlighting */
import 'prism-themes/themes/prism-ghcolors.css';


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
