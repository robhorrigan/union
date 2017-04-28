/**
 * Get a string of the pre-processed svg file. This variable will be empty on builds
 * which define 'process.env.NODE_ENV = "production"` after the code is monified
 *
 * @example <svg></svg>
 */
// eslint-disable-next-line max-len, import/no-webpack-loader-syntax
import rawSvg from '#assets/icons/union-icons.svg?raw&dev';
import { url, hash } from '@xo-union/icons/data';

const CACHE_KEY = '@xo-union/icons/svg-caches';

const A_DAY = 86400000;
const A_WEEK = A_DAY * 7;
const { forEach } = Array.prototype;

export class Installer {
  constructor({
    storage = localStorage,
    cacheKey = CACHE_KEY,
    versionHash = hash,
    iconsUrl = url,
    DateConstructor = Date,
    expirationPeriod = A_WEEK
  } = {}) {
    this.storage = storage;
    this.cacheKey = cacheKey;
    this.versionHash = versionHash;
    this.manifestID = `xo-union-icons-manifest-${versionHash}`;
    this.iconsUrl = iconsUrl;
    this.Date = DateConstructor;
    this.fetchIsInProgress = false;
    this.expirationPeriod = expirationPeriod;
  }

  getSvgString() {
    const cacheObject = this.getCache()[this.versionHash];
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
    cacheObject[this.versionHash] = { lastUsed: new this.Date(), svgString: svg };

    return this.setCache(cacheObject);
  }

  appendToDOM(svg = this.getSvgString()) {
    const tmp = document.createElement('div');
    tmp.innerHTML = svg;

    const svgElement = tmp.querySelector('svg');

    svgElement.id = this.manifestID;
    /* Make all ids unique */
    svgElement.querySelectorAll('[id]')::forEach((element) => {
      element.setAttribute('id', `${element.id}-${this.versionHash}`);
    });

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
    request.addEventListener('load', function loadHandler() {
      if (this.status === 200) {
        const svg = this.responseText;

        self.updateVersion(svg);
        self.appendToDOM();
      } else {
        // eslint-disable-next-line no-console
        console.warn('Unable to load icons:', self.iconsUrl);
      }
    });

    this.fetchIsInProgress = true;
    request.open('GET', this.iconsUrl);
    request.send();
  }

  install() {
    if (this.isSetup()) {
      return;
    }

    if (ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`Using embedded icons. Make sure this is not happening in production.
Follow the next link to learn how to optimize your production build.
  http://docs.union.theknot.com/pattern-library/core-components/iconography`);
      this.appendToDOM(rawSvg);
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
