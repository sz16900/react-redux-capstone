import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('The Header', () => {
  test('renders The <Link />', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header').text()).toBe('');
  });
});
