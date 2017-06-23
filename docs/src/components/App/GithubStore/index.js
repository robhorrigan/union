import { g } from 'xojs/lib/runtime/getGlobal';
import { runInAction, action, observable, extendObservable, autorun } from 'mobx';

const RELEASES_URL = 'https://api.github.com/repos/xogroup/union/releases';

export default class GithubStore {
  constructor({ fetch = ::g.fetch } = {}) {
    this.fetch = fetch;
    extendObservable(this, {
      packageReleases: {},
      systemReleases: [],
      loaded: false
    });
  }

  @action addPackageRelease(packageName, data) {
    if (!this.packageReleases[packageName]) {
      extendObservable(this.packageReleases, { [packageName]: [ data ] });
    } else {
      const { length } = this.packageReleases[packageName];
      this.packageReleases[packageName][length] = data;
    }
  }

  fetchReleases() {
    return this.fetch(RELEASES_URL).then((res) => res.json())
  }

  @action hydrate() {
    return this.fetchReleases().then((releases) => {
      runInAction(() => {
        releases.forEach(({ name, body, tag_name }) => {
          if (name === '*') {
            this.systemReleases.push({ name, body, tagName: tag_name });
            return;
          }

          const matchData = tag_name.match(/^((?:@xo-union)?[^@]+)@(.+)$/);

          if (matchData) {
            const [ , packageName, version ] = matchData;
            this.addPackageRelease(packageName, {
              name, body, tagName: tag_name, version
            });
          }
        });
        this.loaded = true;
      })
    });
  }

  hasReleasesFor(packageName) {
    return this.loaded && !!this.releasesFor(packageName);
  }

  releasesFor(packageName) {
    return this.packageReleases[packageName];
  }
}
