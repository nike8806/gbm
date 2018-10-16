import React from 'react';
import { shallow } from 'enzyme';
import Ipc from './Ipc';

jest.mock('axios');

let component;

describe('Ipc component', () => {
  describe('On mount', () => {
    beforeEach(() => {
      component = shallow(
        <Ipc />
      );
    });

    it('should render correctly', () => {
      expect(component).toMatchSnapshot();
    });

    describe('On componentDidMount calling GBM service', () => {
      it('should show a loader before resolve and closed when is mounted', async () => {
        // TODO implement the UT
      });

      it('should render the data when is correct', () => {
        // TODO implement the UT
      });
      it('should show an error when is wrong', () => {
        // TODO implement the UT
      });
    });
  });
});
