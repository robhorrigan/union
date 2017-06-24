import { observable, action, computed } from 'mobx';

export default class ChangeLogStore {
  @observable currentRelease = null;

  @computed get currentVersion() {
    return this.currentRelease.version;
  }

  @computed get isOpen() {
    return this.currentRelease !== null;
  }

  @computed get markdown() {
    return this.currentRelease.body;
  }

  @action toggle(release) {
    if (this.isCurrent(release)) {
      this.currentRelease = null;
      return;
    }

    this.currentRelease = release;
  }

  isCurrent({ version }) {
    return !!this.currentRelease && this.currentRelease.version === version;
  }
}

