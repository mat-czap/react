import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import UserPage from '../../views/userPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/userPage" component={UserPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;