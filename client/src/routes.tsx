import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login-page';
import { LOGIN_PATH, REGISTER_PATH } from './configs/constants';
import RegisterPage from './pages/registration-page.';
import HomePage from './pages/home-page';
import Div from './components/common/div';

export function Routes(): React.ReactElement {
  return (
    <div style={{ padding: '0' }}>
      <Switch>
        <Route exact path={LOGIN_PATH}>
          <LoginPage />
        </Route>
        <Route exact path={REGISTER_PATH}>
          <RegisterPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/profile">profile page</Route>
        <Route path="/wishlist">wishlist page</Route>
        <Route exact path="/:id">
          detail page
        </Route>
      </Switch>
      <Div padding="0" minHeight="10vh" border="5px solid green">
        footer
      </Div>
    </div>
  );
}

export default Routes;
