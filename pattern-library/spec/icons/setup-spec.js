import { Installer } from '#/icons/setup';

class StorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) { return this.store[key] || null; }
  setItem(key, value) { this.store[key] = value; }
}

describe('Installer', () => {
  describe('#getCache', () => {
    it('gets the cache object', () => {
      const storage = new StorageMock();
      storage.setItem('test', '{"isATest": "true"}');
      const subject = new Installer({ storage, cacheKey: 'test' });
      const result = subject.getCache();
      expect(result.isATest).toBe('true');
    });

    it('returns an empty object of there is nothing there', () => {
      const storage = new StorageMock();
      const subject = new Installer({ storage, cacheKey: 'test' });
      const result = subject.getCache();
      expect(result).toEqual({});
    });
  });

  describe('#setCache', () => {
    it('sets the cache object', () => {
      const storage = new StorageMock();
      const subject = new Installer({ storage, cacheKey: 'test' });
      subject.setCache({ isATest: 'true' });
      expect(JSON.parse(storage.getItem('test')).isATest).toBe('true');
    });
  });


  describe('#updateVersion', () => {
    it('updates the last used date', () => {
      const storage = new StorageMock();
      const subject = new Installer({
        storage,
        cacheKey: 'test',
        versionStamp: 'version1',
        DateConstructor() { return { date: true }; }
      });

      subject.updateVersion('<somsvg>');
      expect(subject.getCache().version1.lastUsed).toEqual({ date: true });
    });

    it('updates the svgString', () => {
      const storage = new StorageMock();
      const subject = new Installer({ storage, cacheKey: 'test', versionStamp: 'version1' });
      subject.updateVersion('<somsvg>');
      expect(subject.getCache().version1.svgString).toEqual('<somsvg>');
    });
  });

  describe('#appendToDOM', () => {
    it('adds the svg string to the dom', () => {
      const storage = new StorageMock();
      const subject = new Installer({ storage, cacheKey: 'test', versionStamp: 'version1' });
      subject.updateVersion('<svg></svg>');
      subject.appendToDOM();
      expect(document.getElementById('xo-union-icons-manifest-version1')).not.toBe(null);
    });
  });

  describe('#isSetup', () => {
    it('returns true if svg is on DOM', () => {
      const storage = new StorageMock();
      const subject = new Installer({ storage, cacheKey: 'test', versionStamp: 'version2' });
      subject.updateVersion('<svg></svg>');
      expect(subject.isSetup()).toBe(false);
      subject.appendToDOM();
      expect(subject.isSetup()).toBe(true);
    });
  });

  describe('#removeOldVersions', () => {
    let currentDate;
    function DateMock(arg) {
      /* Freeze time */
      if (arg) {
        return new Date(arg);
      }

      return currentDate;
    }

    beforeEach(() => {
      currentDate = new Date('4/14/2017');
    });

    it('removes older versions', () => {
      const storage = new StorageMock();
      const subject = new Installer({
        storage,
        cacheKey: 'test',
        versionStamp: 'version2',
        DateConstructor: DateMock
      });

      currentDate = new Date('3/16/2017');

      subject.updateVersion('<svg></svg>');

      currentDate = new Date('4/14/2017');

      subject.removeOldVersions();
      expect(subject.getSvgString()).toBe('<svg></svg>');

      currentDate = new Date('3/15/2017');

      subject.updateVersion('<svg></svg>');

      currentDate = new Date('4/14/2017');

      subject.removeOldVersions();

      expect(subject.getSvgString()).toBe('');
    });
  });

  describe('#fetchSvg', () => {
    it('makes a request to the icons url', () => {
      const openSpy = spyOn(XMLHttpRequest.prototype, 'open');
      const sendSpy = spyOn(XMLHttpRequest.prototype, 'send');
      const subject = new Installer({
        cacheKey: 'test',
        versionStamp: 'version2',
        iconsUrl: 'url'
      });

      subject.fetchSvg();
      expect(openSpy).toHaveBeenCalledWith('GET', 'url');
      expect(sendSpy).toHaveBeenCalled();
    });

    it('updates to version with what comes back', () => {
      spyOn(XMLHttpRequest.prototype, 'open');
      spyOn(XMLHttpRequest.prototype, 'send');
      const eventListenerSpy = spyOn(XMLHttpRequest.prototype, 'addEventListener');
      const storage = new StorageMock();
      const subject = new Installer({
        storage,
        cacheKey: 'test',
        versionStamp: 'version2',
        iconsUrl: 'url'
      });

      eventListenerSpy.and.callFake((eventName, callback) => {
        callback.call({
          responseText: '<svg id="new"></svg>'
        });
      });

      subject.fetchSvg();

      expect(subject.isSetup()).toBe(true);
      expect(subject.getSvgString()).toBe('<svg id="new"></svg>');
    });
  });
});
