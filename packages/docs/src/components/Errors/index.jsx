import React, { PropTypes } from 'react';

function eachRoute(routes, callback, nesting = 0, parentRoute) {
  for (let route of routes) {
    callback(route, nesting, parentRoute);

    if (route.childRoutes) {
      eachRoute(route.childRoutes, callback, nesting + 1, route);
    }
  }
}

export function Error404(_, { router }) {
  const routes = [];

  let routeKey = 0;

  eachRoute(router.routes, (route, nesting, parentRoute) => {
    let path;

    if (parentRoute) {
      path = parentRoute.path + route.path;
    } else {
      path = route.path;
    }

    if (route.path !== '*') {
      routes.push(<li><a href={path}>{path}</a></li>);
    }
  });

  return (
    <div>
      This route doesn't exist.

      <ul>
        {routes}
      </ul>
    </div>
  )
}

Error404.contextTypes = {
  router: PropTypes.any
};

