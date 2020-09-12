import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

describe('The Header', () => {
  test('renders The <Link />', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header').text()).toBe('');
  });
});
