describe('GenericClickTracker bugs', () => {
  /**
   * Issue: #169
   */
  it('loads in a non-browser environment', () => {
    /* eslint-disable global-require */
    require('./');
  });
});
