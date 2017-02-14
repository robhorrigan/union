import React from 'react';
import { files } from '$articles';
import humanize from 'humanize-string';
import pascalize from 'pascal-case';

function normalizePath(...pathSegments) {
  return pathSegments.join('/').replace(/\/{2,}/g, '/');
}

export default class Article {
  /*
  * Create all article instances
  * It feels a bit weird to create all instances during load of this module
  * but its a simple way to create these guys :)
  * */
  static all = files.map(({ pathinfo, module }) =>
    new Article(pathinfo, module.default, module.attributes)
  );

  constructor(pathInfo, Component, attributes = {}) {
    this.pathInfo = pathInfo;
    this.Component = Component;
    this.attributes = attributes;

    /*
     * Use the relative path to the root of the articles folder as the id
     * This is mainly for React's key property
     */
    this.id = pathInfo.relativeName;
  }

  moduleName() {
    return pascalize(this.pathInfo.name);
  }

  title() {
    return this.attributes.title || humanize(this.pathInfo.name);
  }


  component() {
    const props = {
      title: this.title()
    };

    return () => <this.Component {...props} />;
  }

  permalink() {
    const path = this.attributes.permalink || this.pathInfo.relativeName;
    return normalizePath(__webpack_public_path__, path);
  }
}
