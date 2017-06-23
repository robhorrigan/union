import ChangeLogStore from './';

describe('ChangeLogStore', () => {
  describe('#toggle', () => {
    describe('when a new release is passed in', () => {
      it('overrides the currentRelease', () => {
        const subject = new ChangeLogStore();

        subject.currentRelease = { version: '1' };

        expect(subject.currentRelease).toEqual({ version: '1' });

        subject.toggle({ version: '2' });

        expect(subject.currentRelease).toEqual({ version: '2' });
      });
    });

    describe('when the currentRelease is passed in', () => {
      it('unsets the currentRelease', () => {
        const subject = new ChangeLogStore();

        subject.currentRelease = { version: '1' };

        expect(subject.currentRelease).toEqual({ version: '1' });

        subject.toggle({ version: '1' });

        expect(subject.currentRelease).toBe(null);
      });
    });
  });

  describe('.isOpen', () => {
    describe('when currentRelease is null', () => {
      it('returns false', () => {
        const subject = new ChangeLogStore();

        subject.currentRelease = null;

        expect(subject.isOpen).toBe(false);
      });
    });

    describe('when currentRelease is not null', () => {
      it('returns true', () => {
        const subject = new ChangeLogStore();

        subject.currentRelease = { version: '1' };

        expect(subject.isOpen).toBe(true);
      });
    });
  });

  describe('.markdown', () => {
    it('return the currentReleases body', () => {
      const subject = new ChangeLogStore();

      subject.currentRelease = { version: '1', body: '123' };

      expect(subject.markdown).toBe('123');
    });
  });

  describe('#isCurrent', () => {
    describe('when versions match', () => {
      it('returns true', () => {
        const subject = new ChangeLogStore();

        subject.currentRelease = { version: '1', body: '123' };

        expect(subject.isCurrent({ version: '1' })).toBe(true);
      });
    });

    describe('when versions do not match', () => {
      it('returns false', () => {
        const subject = new ChangeLogStore();

        subject.currentRelease = { version: '1', body: '123' };

        expect(subject.isCurrent({ version: '2' })).toBe(false);
      });
    });
  });
});
