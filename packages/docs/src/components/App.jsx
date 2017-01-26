import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Layout from 'components/Layout';
import generateRoutes from 'utils/generateRoutes';

export default function App() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Layout} >
        {generateRoutes()}
      </Route>
    </Router>
  )
}
