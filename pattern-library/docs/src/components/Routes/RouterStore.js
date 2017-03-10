import { normalizePath } from '#docs/utils/paths';
import { RouterStore } from 'mobx-react-router';
import { computed } from 'mobx';


function eachRoute(routes, callback, parentRoute) {
  routes.forEach((route) => {
    callback(route, parentRoute);

    if (route.childRoutes) {
      eachRoute(route.childRoutes, callback, route);
    }
  });
}

/**
 * Store wrapper for RouterStore
 */
export default class Store extends RouterStore {
  @computed get currentPath() {
    return normalizePath(this.location.pathname);
  }

  @computed get paths() {
    const paths = [];

    eachRoute(this.routes, (route, parentRoute) => {
      let path;

      if (parentRoute) {
        path = normalizePath(parentRoute.path, route.path);
      } else {
        path = route.path;
      }

      paths.push(path);
    });

    return paths;
  }

  inPath(path) {
    return normalizePath(this.currentPath).indexOf(normalizePath(path)) >= 0;
  }
}

