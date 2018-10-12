import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from 'firebase';
import PropTypes from 'prop-types';
import Loader from '../../components/loader/Loader';
import ROUTES from '../../constants/routes';
import './Login.scss';


/**
 * Handle the Login page
 */
class Login extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
    showLoader: false,
    email: '',
    password: ''
  }

  /**
  * OnSubmit function to try login with Firebase
  */
  onSubmitLogin = () => {
    const { email, password } = this.state;
    const { history } = this.props;

    this.setState({ showLoader: true });
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ showLoader: false });
        history.push(ROUTES.IPC);
      }).catch((error) => {
        const errorMessage = error.message;
        this.setState({
          showLoader: false,
          errorMessage
        });
      });
  }

  /**
   * Handle the email input change
   * @param {*} event
   */
  handleEmailChange = ({ target: { value } }) => {
    // TODO clear the input and show errors
    this.setState({ email: value });
  }

  /**
   * Handle the password input change
   * @param {*} event
   */
  handlePasswordChange = ({ target: { value } }) => {
    // TODO clear the input and show errors
    this.setState({ password: value });
  }

  render() {
    const {
      showLoader,
      email,
      password,
      errorMessage
    } = this.state;
    return (
      <div className="login">
        <h2>
          Login
        </h2>
        <div className="login__container">
          <form>
            <label htmlFor="email">
              Email:
              <input
                id="email"
                type="text"
                value={email}
                onChange={this.handleEmailChange}
              />
            </label>

            <label htmlFor="password">
              Password:
              <input
                id="password"
                type="password"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </label>

            <input
              type="button"
              onClick={this.onSubmitLogin}
              value="Login"
            />
          </form>
        </div>

        {showLoader && (
          <Loader />
        )}

        {errorMessage && (
          <h2>
            {errorMessage}
          </h2>
        )}
      </div>
    );
  }
}

export default withRouter(Login);
