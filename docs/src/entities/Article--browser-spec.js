import Article from './Article';

describe('Article', () => {
  describe('#title', () => {
    describe('When attributes includes a title', () => {
      it('returns that title', () => {
        const subject = new Article({ }, () => {}, { title: 'The Title' });

        expect(subject.title()).toBe('The Title');
      });
    });

    describe('When attributes does not include a title', () => {
      it('assumes the title from the file name', () => {
        const subject = new Article({
          relativeName: 'the-title'
        }, () => {});

        expect(subject.title()).toBe('The title');
      });

      describe('When the filename is a README', () => {
        it('assumes the title from the parent directory', () => {
          const subject = new Article({
            name: 'README',
            relativeName: '/a/the-title/README'
          }, () => {});

          expect(subject.title()).toBe('The title');
        });
      });
    });
  });
});
