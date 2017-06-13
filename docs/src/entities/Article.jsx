import React from 'react';
import humanize from 'humanize-string';
import pascalize from 'pascal-case';
import { normalizePath } from '#docs/utils/paths';
import { files } from '$articles?readDirectory';

export default class Article {
  /*
  * Create all article instances
  * It feels a bit weird to create all instances during load of this module
  * but its a simple way to create these guys :)
  * */
  static all = files.map(({ pathinfo, module }) =>
    new Article(pathinfo, module.default, module.attributes)
  );

  static contentPatterns() {
    return this.all.filter(article => article.isContentPattern());
  }

  static utilities() {
    return this.all.filter(article => article.isUtility());
  }

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
    if (this.attributes.title) {
      return this.attributes.title;
    }

    const [, assumedName] = this.pathInfo.relativeName.match(/([^/]+)(?:\/README)?$/);
    return humanize(assumedName);
  }

  component() {
    const props = {
      title: this.title()
    };

    return () => <this.Component {...props} />;
  }

  fullPath() {
    return normalizePath(__webpack_public_path__, this.path());
  }

  path() {
    const relativeName = this.pathInfo.relativeName.replace(/\/README$/, '');
    return normalizePath(this.attributes.permalink || relativeName);
  }

  isContentPattern() {
    return this.attributes.isContentPattern ||
      this.pathInfo.relativeName.indexOf('/content-patterns/') >= 0;
  }

  isUtility() {
    return this.pathInfo.relativeName.indexOf('/utilities/') >= 0;
  }
}
