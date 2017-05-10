/* This is needed by the docs app
 * It is a bit unfortunate but prismjs is designed to only be used as a global
 **/
import 'prismjs';
import 'babel-polyfill';

const packageContext = require.context('./packages', true, /browser-spec.jsx?$/);
const docsContext = require.context('./docs', true, /browser-spec.jsx?$/);

packageContext.keys().forEach(packageContext);
docsContext.keys().forEach(docsContext);
