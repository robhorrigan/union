import React from 'react';
import { mount } from 'enzyme';
import { getNodeAt } from '@tests/support/enzyme-component';
import BusinessSection from './';

describe('<BusinessSection>', () => {
  it('renders the expected links', () => {
    /* eslint-disable max-len */
    const subject = mount(<BusinessSection />);

    const links = subject.find('a');

    expect(links::getNodeAt(0).href).toContain('//www.xogroupinc.com/xo-group-company.aspx?__hstc=131446032.cf51d70e35247434d01673c8dab3aa11.1472494787190.1493912032584.1493924757678.74&__hssc=131446032.1.1493924757678&__hsfp=711516163');
    expect(links::getNodeAt(1).href).toContain('/more/about-us');
    expect(links::getNodeAt(2).href).toContain('//www.xogroupinc.com/xo-group-careers.aspx?__hstc=131446032.cf51d70e35247434d01673c8dab3aa11.1472494787190.1493912032584.1493924757678.74&__hssc=131446032.1.1493924757678&__hsfp=711516163');
    expect(links::getNodeAt(3).href).toContain('//ir.xogroupinc.com/?__hstc=131446032.cf51d70e35247434d01673c8dab3aa11.1472494787190.1493912032584.1493924757678.74&__hssc=131446032.1.1493924757678&__hsfp=711516163');
    expect(links::getNodeAt(4).href).toContain('//www.xogroupinc.com/press-releases-home.aspx?__hstc=131446032.cf51d70e35247434d01673c8dab3aa11.1472494787190.1493912032584.1493924757678.74&__hssc=131446032.1.1493924757678&__hsfp=711516163');
    expect(links::getNodeAt(5).href).toContain('//partnerssignup.theknot.com/');
    expect(links::getNodeAt(6).href).toContain('//www.thebump.com');
    expect(links::getNodeAt(7).href).toContain('//www.gigmasters.com');
    expect(links::getNodeAt(8).href).toContain('/privacy-policy');
    expect(links::getNodeAt(9).href).toContain('/terms-and-conditions');
    expect(links::getNodeAt(10).href).toContain('//help.theknot.com/forums/263843-theknot-com-ideas-feedback');
    expect(links::getNodeAt(11).href).toContain('//feedback.beta.theknot.com/knowledgebase');
  });
});
