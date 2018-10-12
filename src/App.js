import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import React from 'react';
import './App.scss';
import Ipc from './pages/ipc/Ipc';
import Login from './pages/login/Login';
import ROUTES from './constants/routes';

// TODO move this to config file and separate with prod and non prod
const config = {
  apiKey: 'AIzaSyC6y7SEPtz4KkedClg2aYrgGW5g96gdMCo',
  authDomain: 'gbm-test-1cc96.firebaseapp.com',
  databaseURL: 'https://gbm-test-1cc96.firebaseio.com',
  projectId: 'gbm-test-1cc96',
  storageBucket: 'gbm-test-1cc96.appspot.com',
  messagingSenderId: '726019065706'
};
firebase.initializeApp(config);


const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.IPC} component={Ipc} />
    </Switch>
  </Router>
);

export default App;
