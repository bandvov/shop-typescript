import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login-page';
import { LOGIN_PATH } from './configs/constants';
import RegisterPage from './pages/registration-page.';

export function Routes(): React.ReactElement {
  return (
    <Switch>
      <Route path={LOGIN_PATH}>
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
    </Switch>
  );
}

export default Routes;
