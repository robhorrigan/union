import React, { PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from 'components/Layout';
import { Error404 } from 'components/Errors';
import generateRoutes from 'utils/generateRoutes';

function handleBookmark() {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(function () {
      const bookmark = document.getElementById(hash.replace('#', ''));

      if (bookmark) {
        bookmark.scrollIntoView();
      }
    }, 0);
  }
}

export default function App() {
  return (
    <Router history={browserHistory} onUpdate={handleBookmark}>
      <Route path="/" component={Layout} >
        {generateRoutes()}

        <Route path="*" component={Error404} />
      </Route>
    </Router>
  )
}
