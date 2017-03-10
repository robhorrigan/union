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

  inPath(path) {
    return this.currentPath.indexOf(normalizePath(path)) >= 0;
  }
}

