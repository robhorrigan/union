import React from 'react';
import Article from '#docs/entities/Article';

import { NavItem } from '#docs/components/SideNav/utils';

Article.all.forEach((article) => {
  exports[article.moduleName()] = function ({ label = article.title() }) {
    return <NavItem href={article.permalink()}> {label} </NavItem>
  }
});
