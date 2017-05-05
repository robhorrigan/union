/* This is needed by the docs app
 * It is a bit unfortunate but prismjs is designed to only be used as a global
 **/
import 'prismjs';
import 'babel-polyfill';

const testsContext = require.context('./spec/browser', true, /spec.jsx?$/);
const xojsContext = require.context('./packages/xojs/src', true, /spec.jsx?$/);

testsContext.keys().forEach(testsContext);
xojsContext.keys().forEach(xojsContext);
