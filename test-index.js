/* This is needed by the docs app
 * It is a bit unfortunate but prismjs is designed to only be used as a global
 **/
import 'prismjs';
import 'babel-polyfill';

const browserContext = require.context('./', true, /browser-spec.jsx?$/);

browserContext.keys().forEach(browserContext);
