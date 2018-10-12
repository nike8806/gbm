import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Ipc from './Ipc';

let component;

describe('Ipc component', () => {
  describe('Happy path', () => {
    beforeEach(() => {
      component = shallow(
        <Ipc />
      );
    });

    it('should render correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe('With error on the service', () => {

  });
});
