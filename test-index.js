var testsContext = require.context("./packages/components/", true, /spec.jsx?$/);
testsContext.keys().forEach(testsContext);
