import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Checks the <App />', () => {
  test('renders the <Provider />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').text()).toContain('<Provider />');
  });
});
