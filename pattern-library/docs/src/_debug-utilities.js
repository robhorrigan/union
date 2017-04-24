/* eslint-disable no-inner-declarations */
if (process.env.NODE_ENV !== 'production') {
  /**
   * Tap into a call chain. Useful for inspecting values without having to deconstruct code
   *
   * @example  <Component aProp={aDynamicValue()::tap(() => someDebuging())} />
   **/
  function tap(callback) {
    callback(this);
    return this;
  }

  let logCounter = 0;
  /**
   * Log value. Useful for logging values without deconstructing code
   *
   * @example <Component aProp={aDynamicValue()::log()} />
   **/
  function log() {
    // eslint-disable-next-line no-console, no-plusplus
    return this::tap(() => console.log('DEBUG', logCounter++, this));
  }

  window.log = log;
  window.tap = tap;
}
