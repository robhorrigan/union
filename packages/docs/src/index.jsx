import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

/* Import bootstrap css globals */
import '@union/bootstrap';
/* Load prism css for syntax highlighting */
import '!style!a-css?mode=global!prism-themes/themes/prism-ghcolors.css';
import '!style!a-css?mode=global!global-syntax-highlighting.css';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
