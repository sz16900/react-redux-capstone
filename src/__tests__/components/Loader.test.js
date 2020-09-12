import React from 'react';
import Loader from '../../components/Loader';
import { shallow } from 'enzyme';

describe('The Loader', () => {
  test('renders The <Link />', () => {
    const wrapper = shallow(<Loader />);
    console.log(wrapper.debug());
    expect(wrapper.find('#loader-wrapper').text()).toBe('');
  });
});
