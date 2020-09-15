import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../components/Loader';

describe('The Loader', () => {
  test('renders The <Link />', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('#loader-wrapper').text()).toBe('');
  });
});
