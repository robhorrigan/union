import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, withRouter } from 'react-router';

import { computed } from 'mobx';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

import Error404 from '#docs/components/Errors/404';
import Layout from '#docs/components/Layout';
import Article from '#docs/entities/Article';
import siteConfig from '$site-config';
import generateRoutes from './generateRoutes';
import handleBookmark from './handleBookmark';

// eslint-disable-next-line camelcase
const rootPath = __webpack_public_path__;

class RoutingStore extends RouterStore {
  @computed get currentPath() {
    return this.location.pathname;
  }
}

export default class Routes extends Component {
  routing = new RoutingStore()
  history = syncHistoryWithStore(browserHistory, this.routing)

  render() {
    const routes = generateRoutes(Article.all);

    return (
      <Provider routing={this.routing}>
        <Router history={this.history} onUpdate={handleBookmark}>
          <Route path={rootPath} component={Layout} >
            <IndexRoute to={siteConfig.landingPage} />
            {routes}
            <Route path="*" component={Error404} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
