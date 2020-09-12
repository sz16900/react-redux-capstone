import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('Checks the <App />', () => {
  test('renders the <Provider />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').text()).toContain('<Provider />');
  });
});
