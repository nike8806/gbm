import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';
import Loader from '../../components/loader/Loader';

jest.mock('firebase');
const firebase = require('firebase');

let component;

const mockPush = jest.fn(() => Promise.resolve({ status: true }));
const mockHistory = { push: mockPush };


describe.only('Login component', () => {
  describe('On mount', () => {
    beforeEach(() => {
      component = shallow(
        <Router>
          <Login />
        </Router>
      );
    });

    it('should render correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe('On submit data', () => {
    let emailInput;
    let passwordInput;

    beforeEach(() => {
      component = mount(
        <Router>
          <Login history={mockHistory} />
        </Router>
      );
      emailInput = component.find('#email').at(0);
      passwordInput = component.find('#password').at(0);
      /* eslint-enable */
      emailInput.simulate('change', {
        target: {
          value: 'email@email.com'
        }
      });

      passwordInput.simulate('change', {
        target: {
          value: 'somePassword123'
        }
      });
    });
    describe('On success', () => {
      it('should redirect to API page', async () => {
        const mockSignInWithEmailAndPassword = jest.fn(() => Promise.resolve({ data: 'foo' }));
        /* eslint-disable */
        firebase.auth = () => {
          return { signInWithEmailAndPassword: mockSignInWithEmailAndPassword };
        };
        /* eslint-enable */
        component.find('#button-submit').first().simulate('click', { preventDefault() {} });
        expect(component.update().find(Loader).length).toBe(1);
        expect(mockSignInWithEmailAndPassword).toHaveBeenCalled();
        expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith('email@email.com', 'somePassword123');

        firebase.auth().signInWithEmailAndPassword().then(() => {
          expect(mockPush).toHaveBeenCalled();
        });
      });
    });

    describe('On error', () => {
      it('should show an error when the password or email is wrong', async () => {
        /* eslint-disable */
        const mockSignInWithEmailAndPassword = jest.fn(() => Promise.reject({ message: 'Some error' }));
        firebase.auth = () => {
          return { signInWithEmailAndPassword: mockSignInWithEmailAndPassword };
        };
        /* eslint-enable */
        component.find('#button-submit').first().simulate('click', { preventDefault() {} });
        expect(component.update().find(Loader).length).toBe(1);
        expect(mockSignInWithEmailAndPassword).toHaveBeenCalled();
        expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith('email@email.com', 'somePassword123');

        firebase.auth().signInWithEmailAndPassword().catch(() => {
          expect(component.find('.login__error-message').length).toBe(1);
        });
      });
    });
  });
});
