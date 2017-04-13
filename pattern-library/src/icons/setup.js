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
let inProgress = false;

function getCached() {
  return JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
}

function setCache(value) {
  return localStorage.setItem(CACHE_KEY, JSON.stringify(value));
}
function updateCache(svg) {
  const cacheObject = getCached();
  cacheObject[stamp] = { lastUsed: new Date(), svgString: svg };

  return setCache(cacheObject);
}

function attach(svg) {
  const tmp = document.createElement('div');
  tmp.innerHTML = svg;

  const svgElement = tmp.querySelector('svg');

  svgElement.id = MANIFEST_ID;
  svgElement.dataset.stamp = stamp;

  document.body.appendChild(svgElement);
}

function createRequest() {
  const request = new XMLHttpRequest();

  request.addEventListener('load', function () {
    const svg = this.responseText;

    updateCache(svg);
    attach(svg);
  });

  if (ENV !== 'production') {
    request.addEventListener('error', () => {
      console.warn('Unable to fetch icons. Falling back to embedded icons.');
      attach(rawSvg);
    });
  }

  request.open('GET', url);

  return request;
}

function isSetup() {
  return !!document.getElementById(MANIFEST_ID);
}

const A_DAY = 86400000;
const TWO_WEEKS = A_DAY * 14;
function removeOldCaches() {
  const cache = getCached();

  Object.keys(cache).forEach((key) => {
    const cachedObject = cache[key];
    const lastUsedDate = new Date(cachedObject.lastUsed);

    if (new Date() - lastUsedDate >= TWO_WEEKS) {
      delete cache[key];
    }
  });

  setCache(cache);
}

export function init() {
  if (inProgress || isSetup()) {
    return;
  }

  inProgress = true;

  const cached = getCached();
  const request = createRequest();

  if (cached && cached[stamp]) {
    const { svgString } = cached[stamp];

    updateCache(svgString)
    attach(svgString);
    return;
  }

  request.send();

  removeOldCaches();
}
