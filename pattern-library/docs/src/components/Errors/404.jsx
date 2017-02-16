import React, { PropTypes } from 'react';
import { normalizePath } from '#docs/utils/paths';

function eachRoute(routes, callback, parentRoute) {
  routes.forEach((route) => {
    callback(route, parentRoute);

    if (route.childRoutes) {
      eachRoute(route.childRoutes, callback, route);
    }
  });
}

export default function Error404(_, { router }) {
  const routes = [];

  eachRoute(router.routes, (route, parentRoute) => {
    let path;

    if (parentRoute) {
      path = normalizePath(parentRoute.path, route.path);
    } else {
      path = route.path;
    }

    if (route.path !== '*') {
      routes.push(<li key={path}><a href={path}>{path}</a></li>);
    }
  });

  return (
    <div>
      {"This route doesn't exist."}

      <ul>
        {routes}
      </ul>
    </div>
  );
}

Error404.contextTypes = {
  router: PropTypes.any
};

