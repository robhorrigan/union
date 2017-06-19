/**
 * Credit: https://github.com/ForbesLindesay/matches-selector
 * Relevant PRs:
 *  https://github.com/ForbesLindesay/matches-selector/pull/1
 *  https://github.com/component/matches-selector/pull/16
 *
 * Thoughts:
 *  The matches-selector project is not getting much dev support
 *  yet there is (at the time of writing this) a load time bug has affected
 *  server side rendering for some of the union components. Given the size
 *  and nature of this module, it makes sense to host a copy of it's source
 *  here.
 */

import getGlobal from 'xojs/lib/runtime/getGlobal';

const global = getGlobal();

const ElementConstructor = global.Element || function () {};
const proto = ElementConstructor.prototype || {};
const vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

export default function matches(selector) {
  if (vendor) return vendor.call(this, selector);

  const parent = this.parentNode;
  const nodes = parent ? parent.querySelectorAll(selector) : [];
  const len = nodes.length;

  for (let i = 0; i < len; i += 1) {
    if (nodes[i] === this) return true;
  }

  return false;
}
