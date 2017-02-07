import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from '#docs/components/Layout';
import generateRoutes from '#docs/utils/generateRoutes';

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
      </Route>
    </Router>
  )
}
