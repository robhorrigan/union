import { normalizePath } from '#docs/utils/paths';
import { RouterStore } from 'mobx-react-router';
import { computed } from 'mobx';

/**
 * Store wrapper for RouterStore
 */
export default class Store extends RouterStore {
  @computed get currentPath() {
    return normalizePath(this.location.pathname);
  }

  /**
   * This algorithm is not entirely correct
   * it returns true for cases where current path = /ab/cd and given path is b/c;
   * Notice that b/c is not a subpath
   */
  inPath(path) {
    return this.currentPath.indexOf(normalizePath(path)) >= 0;
  }
}

