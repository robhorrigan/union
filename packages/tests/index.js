var testsContext = require.context("./spec", true, /-spec.jsx?$/);
testsContext.keys().forEach(testsContext);
