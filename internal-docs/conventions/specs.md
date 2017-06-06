Specs
===

### File names

Because we use the [pods](./pods.md) approach to organize modules, and we have a need to run some tests in a browser context and other tests in a node context, we have established a convention of differentiating the context in which the tests will run via the name of the spec files. Spec files ending with `browser-spec.js` will be run by karma, while spec files ending with `node-spec.js` will be run by node.
