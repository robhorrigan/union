import { files } from '$articles';
import humanize from 'humanize-string';
import pascalize from 'pascal-case';

export default class Article {
  /*
  * Create all article instances
  * It feels a bit weird to create all instances during load of this module
  * but its a simple way to create these guys :)
  * */
  static all = files.map(({ pathinfo, module }) => new Article(pathinfo, module.default, module.attributes));

  constructor(pathInfo, Component, attributes = {}) {
    this.pathInfo = pathInfo;
    this.Component = Component;
    this.attributes = attributes;
  }

  moduleName() {
    return pascalize(this.pathInfo.name);
  }

  title() {
    return this.attributes.title || humanize(this.pathInfo.name);
  }

  permalink() {
    return this.attributes.permalink || this.pathInfo.relativeName;
  }

  toProps() {
    return {
      title: this.title()
    }
  }
}
