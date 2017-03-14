/* This is needed by the docs app
 * It is a bit unfortunate but prismjs is designed to only be used as a global
 **/
import 'prismjs';
import 'babel-polyfill';

const testsContext = require.context('./pattern-library/spec', true, /spec.jsx?$/);
testsContext.keys().forEach(testsContext);
