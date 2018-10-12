import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Header from './Header';

let component;

describe('Header component', () => {
  describe('On mount', () => {
    beforeEach(() => {
      const history = {};
      const children = <div>Something</div>;
      component = shallow(
        <Header history={history} children={children}/>
      );
    });

    it('should render correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
