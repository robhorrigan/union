/* eslint-disable import/no-extraneous-dependencies */

import toQueryString from 'xojs/lib/object/toQueryString';

export default function withParams(paramsObject) {
  return `${this}?${paramsObject::toQueryString()}`;
}
