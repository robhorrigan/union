import { DefaultFollowStrategy } from './';

describe('DefaultFollowStrategy', () => {
  it('redirects to the href', (done) => {
    const locationMock = { href: null };
    const subject = new DefaultFollowStrategy({ timeout: 300, location: locationMock });
    subject.call({ href: 'new-location' });
    expect(locationMock.href).toBe(null);

    setTimeout(() => {
      expect(locationMock.href).toBe('new-location');
      done();
    }, 300);
  });
});
