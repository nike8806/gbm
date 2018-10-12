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
    showLoader: false
  }

  /**
  * OnSubmit function to try logout with Firebase
  */
  onSubmitLogout = () => {
    const { history } = this.props;

    this.setState({ showLoader: true });
    auth()
      .signOut()
      .then((response) => {
        this.setState({ showLoader: false });
        history.push(ROUTES.LOGIN);
        console.log(response);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        this.setState({ showLoader: false });
      });
  }

  render() {
    const { showLoader } = this.state;
    const { children } = this.props;

    return (
      <div className="header">
        <div className="header__title">
          <input
            type="button"
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
      </div>
    );
  }
}

export default Header;
