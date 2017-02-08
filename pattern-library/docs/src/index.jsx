import React from 'react';
import ReactDOM from 'react-dom';
import App from '#docs/components/App';

/* Import bootstrap css globals */
import '@xo-union/bootstrap';
/* Load prism css for syntax highlighting */
import 'prism-themes/themes/prism-ghcolors.css';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
