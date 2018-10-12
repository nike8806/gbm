import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from 'firebase';
import ROUTES from '../../constants/routes';

const checkAuthorization = (Page) => {
  class CheckAuthorization extends Component {
    state = {
      authUser: null
    };

    componentDidMount() {
      const { history } = this.props;

      auth().onAuthStateChanged((authUser) => {
        if (!authUser) {
          history.push(ROUTES.LOGIN);
        }
        this.setState({
          authUser
        });
      });
    }

    render() {
      const { authUser } = this.state;
      return (authUser && <Page {...this.props} />);
    }
  }

  return withRouter(CheckAuthorization);
};

export default checkAuthorization;
