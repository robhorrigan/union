import React from 'react';
import { mount } from 'enzyme';
import GenericClickTracker from './';

describe('<GenericClickTracker>', () => {
  describe('onClick of an anchor', () => {
    let analyticsMock;
    const mockEventData = { a: 1 };

    beforeEach(() => {
      analyticsMock = { track: jasmine.createSpy('track') };
    });

    it('adds tracking behavior to the child elements', () => {
      const subject = mount(
        <GenericClickTracker
          analytics={analyticsMock}
          eventName="event name"
          eventData={mockEventData}
        >
          <a>Content</a>
        </GenericClickTracker>
      );

      const anchor = subject.find('a');
      anchor.simulate('click');

      expect(analyticsMock.track).toHaveBeenCalledWith('event name', { a: 1 });
    });

    it('allows generation of dynamic tracking data', () => {
      const subject = mount(
        <GenericClickTracker
          analytics={analyticsMock}
          eventName={anchor => anchor.dataset.eventName}
          eventData={anchor => ({ selection: anchor.textContent })}
        >
          <a data-event-name="Test Event">Content</a>
        </GenericClickTracker>
      );

      const anchor = subject.find('a');
      anchor.simulate('click');

      expect(analyticsMock.track).toHaveBeenCalledWith('Test Event', { selection: 'Content' });
    });

    describe('when click will cause a page location change', () => {
      let followStrategyMock;

      beforeEach(() => {
        followStrategyMock = { call: jasmine.createSpy('follow strategy') };
      });

      it('prevents the default behavior', () => {
        const eventMock = { preventDefault: jasmine.createSpy('preventDefault') };

        const subject = mount(
          <GenericClickTracker
            analytics={analyticsMock}
            followStrategy={followStrategyMock}
            eventName="event name"
            eventData={mockEventData}
          >
            <a href="http://google.com">Content 1</a>
            <a>Content 2</a>
          </GenericClickTracker>
        );

        const anchor = subject.find('a');
        anchor.at(0).simulate('click', eventMock);

        // link that wont leave page
        anchor.at(1).simulate('click', eventMock);

        expect(eventMock.preventDefault.calls.count()).toBe(1);
      });

      it('calls the followStrategy', () => {
        const subject = mount(
          <GenericClickTracker
            analytics={analyticsMock}
            followStrategy={followStrategyMock}
            eventName="event name"
            eventData={mockEventData}
          >
            <a href="http://google.com">Content 1</a>
            <a>Content 2</a>
          </GenericClickTracker>
        );

        const anchor = subject.find('a');
        anchor.at(0).simulate('click');

        // link that wont leave page
        anchor.at(1).simulate('click');

        expect(followStrategyMock.call.calls.count()).toBe(1);

        expect(followStrategyMock.call).toHaveBeenCalledWith({ href: 'http://google.com' });
      });
    });
  });
});
