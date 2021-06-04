import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login-page';
import { LOGIN_PATH } from './configs/constants';
import RegisterPage from './pages/registration-page.';
import HomePage from './pages/home-page';
import Div from './components/common/div';

export function Routes(): React.ReactElement {
  return (
    <div style={{ padding: '0' }}>
      <Switch>
        <Route path={LOGIN_PATH}>
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Div padding="0" minHeight="10vh" border="5px solid green">
        footer
      </Div>
    </div>
  );
}

export default Routes;
