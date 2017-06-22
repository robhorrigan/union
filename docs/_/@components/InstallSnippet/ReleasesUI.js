import { observable, action, computed } from 'mobx';

export default class ReleasesUI {
  @observable current = {
    body: null,
    version: null
  }

  @action
  toggle(body, version) {
    if (version === this.current.version) {
      this.current.body = null;
      this.current.version = null;
      return;
    }

    this.current.body = body;
    this.current.version = version;
  }

  @computed
  get isOpen() {
    return this.current.version !== null;
  }
}
