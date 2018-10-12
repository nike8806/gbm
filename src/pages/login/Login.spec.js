import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Login from './Login';

let component;

describe('Login component', () => {
  describe('On mount', () => {
    beforeEach(() => {
      component = shallow(
        <Login />
      );
    });

    it('should render correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
