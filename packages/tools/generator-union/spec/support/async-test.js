module.exports = function asyncTest(test) {
  return function (done) {
    return this.promise.then(test).catch(fail).then(done);
  }
}
