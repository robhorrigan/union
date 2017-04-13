/**
 * Get a string of the pre-processed svg file. This variable will be empty on builds
 * which define 'process.env.NODE_ENV = "production"` after the code is monified
 *
 * @example <svg></svg>
 */
import rawSvg from '!!if-production-loader?not!icon-loader?exportsResult!#assets/icons/union-icons.svg';
import { url, stamp } from '@xo-union/icons/data';

const MANIFEST_ID = `xo-union-icons-manifest-${stamp}`;
const CACHE_KEY = '@xo-union/icons/svg-caches';

const A_DAY = 86400000;
const ONE_MONTH = A_DAY * 30;

export class Installer {
  constructor({
    storage = localStorage,
    cacheKey = CACHE_KEY,
    versionStamp = stamp,
    iconsUrl = url,
    DateConstructor = Date,
    expirationPeriod = ONE_MONTH
  } = {}) {
    this.storage = storage;
    this.cacheKey = cacheKey;
    this.versionStamp = versionStamp;
    this.manifestID = `xo-union-icons-manifest-${versionStamp}`;
    this.iconsUrl = iconsUrl;
    this.Date = DateConstructor;
    this.fetchIsInProgress = false;
    this.expirationPeriod = expirationPeriod;
  }

  getSvgString() {
    const cacheObject = this.getCache()[this.versionStamp];
    if (!cacheObject) {
      return '';
    }

    return cacheObject.svgString;
  }

  getCache() {
    return JSON.parse(this.storage.getItem(this.cacheKey)) || {};
  }

  setCache(value) {
    return this.storage.setItem(this.cacheKey, JSON.stringify(value));
  }

  updateVersion(svg = this.getSvgString()) {
    const cacheObject = this.getCache();
    cacheObject[this.versionStamp] = { lastUsed: new this.Date(), svgString: svg };

    return this.setCache(cacheObject);
  }

  appendToDOM(svg = this.getSvgString()) {
    const tmp = document.createElement('div');
    tmp.innerHTML = svg;

    const svgElement = tmp.querySelector('svg');

    svgElement.id = this.manifestID;
    svgElement.dataset.stamp = this.versionStamp;

    document.body.appendChild(svgElement);
  }

  isSetup() {
    return !!document.getElementById(this.manifestID);
  }

  removeOldVersions() {
    const cache = this.getCache();

    Object.keys(cache).forEach((key) => {
      const cachedObject = cache[key];
      const lastUsedDate = new this.Date(cachedObject.lastUsed);
      const today = new this.Date();
      const timeSinceLastUsed = today - lastUsedDate;

      if (timeSinceLastUsed >= this.expirationPeriod) {
        delete cache[key];
      }
    });

    this.setCache(cache);
  }

  fetchSvg() {
    if (this.fetchIsInProgress) {
      return;
    }

    const request = new XMLHttpRequest();

    const self = this;
    request.addEventListener('load', function () {
      const svg = this.responseText;

      self.updateVersion(svg);
      self.appendToDOM();
    });

    if (ENV !== 'production') {
      request.addEventListener('error', function () {
        console.warn('Unable to fetch icons. Falling back to embedded icons.');
        self.appendToDOM(rawSvg);
      });
    }

    this.fetchIsInProgress = true;
    request.open('GET', this.iconsUrl);
    request.send();
  }

  install() {
    if (this.isSetup()) {
      return;
    }

    this.removeOldVersions();

    if (this.getSvgString()) {
      this.updateVersion();
      this.appendToDOM();
      return;
    }

    this.fetchSvg();
  }
}

const defaultInstaller = new Installer();
export function init() {
  defaultInstaller.install();
}
