/* global fail */

module.exports = function asyncTest(test) {
  return function testBlock(done) {
    return this.promise.then(test).catch(fail).then(done);
  };
};
