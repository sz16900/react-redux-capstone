import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('The Footer', () => {
  test('renders Seth Zea', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').text()).toContain('Seth Zea');
  });
});
