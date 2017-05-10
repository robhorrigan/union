const packageContext = require.context('./packages', true, /benchmark.jsx?$/);
const docsContext = require.context('./docs', true, /benchmark.jsx?$/);

packageContext.keys().forEach(packageContext);
docsContext.keys().forEach(docsContext);
