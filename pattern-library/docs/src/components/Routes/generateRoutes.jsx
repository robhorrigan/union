import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { landingPage } from '$site-config';

export default function generateRoutes(articles) {
  return articles.map(article =>
    <Route
      key={article.id}
      path={article.permalink()}
      component={article.component()}
    />
  );
}
