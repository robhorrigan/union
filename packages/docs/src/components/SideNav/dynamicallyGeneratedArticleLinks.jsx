import React from 'react';
import Article from 'entities/Article';

import { NavItem } from 'components/SideNav/utils';

Article.all.forEach((article) => {
  exports[article.moduleName()] = function ({ label = article.title() }) {
    return <NavItem href={article.permalink()}> {label} </NavItem>
  }
});
