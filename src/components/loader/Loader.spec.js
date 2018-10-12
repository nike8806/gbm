import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Loader from './Loader';

let component;

describe('Loader component', () => {
  describe('with no theme', () => {
    beforeEach(() => {
      component = shallow(
        <Loader />
      );
    });

    it('should render correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
