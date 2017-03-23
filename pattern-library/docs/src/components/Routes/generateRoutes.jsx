import React from 'react';
import { Route } from 'react-router';

export default function generateRoutes(articles) {
  return articles.map(article =>
    <Route
      key={article.id}
      path={article.permalink()}
      component={article.component()}
    />
  );
}
