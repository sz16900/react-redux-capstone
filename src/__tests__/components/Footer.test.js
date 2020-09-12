import React from 'react';
import Footer from '../../components/Footer';
import { shallow } from 'enzyme';

describe('The Footer', () => {
  test('renders Seth Zea', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').text()).toContain('Seth Zea');
  });
});
