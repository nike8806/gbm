import React, { Component } from 'react';
import { auth } from 'firebase';
import PropTypes from 'prop-types';
import Loader from '../loader/Loader';
import ROUTES from '../../constants/routes';
import './Header.scss';

/**
 * Handle the Header page
 */
class Header extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  };

  state = {
    showLoader: false,
    errorMessage: ''
  }

  /**
  * OnSubmit function to try logout with Firebase
  */
  onSubmitLogout = () => {
    const { history } = this.props;

    this.setState({ showLoader: true });
    auth()
      .signOut()
      .then(() => {
        this.setState({ showLoader: false });
        history.push(ROUTES.LOGIN);
      }).catch((error) => {
        const { message: errorMessage } = error;
        this.setState({ showLoader: false, errorMessage });
      });
  }

  render() {
    const { showLoader, errorMessage } = this.state;
    const { children } = this.props;

    return (
      <div className="header">
        <div className="header__title">
          <input
            type="button"
            id="button-logout"
            onClick={this.onSubmitLogout}
            value="Logout"
          />
        </div>

        <div className="header__title">
          {children}
        </div>

        {showLoader && (
          <Loader />
        )}

        {errorMessage && (
          <h2 className="login__error-message">
            {errorMessage}
          </h2>
        )}
      </div>
    );
  }
}

export default Header;
