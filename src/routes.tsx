import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login-page';
import { LOGIN_PATH, REGISTER_PATH, HOMEPAGE_PATH, PROFILE_PATH, WISHLIST_PATH, DETAILS_PATH, ABOUT_PATH } from './configs/constants';
import RegisterPage from './pages/registration-page';
import HomePage from './pages/home-page';
import Footer from './components/footer';

const routes = [
  {path: ABOUT_PATH, Component: RegisterPage},
  {path: DETAILS_PATH, Component: LoginPage},
  {path: HOMEPAGE_PATH, Component: HomePage},
  {path: LOGIN_PATH, Component: LoginPage},
  {path: PROFILE_PATH, Component: LoginPage},
  {path: REGISTER_PATH
    , Component: RegisterPage},
    {path: WISHLIST_PATH, Component: LoginPage},
];

export function Routes(): React.ReactElement {
  return (
    <div style={{ padding: '0' }}>
      <Switch>
      {routes.map(({path,Component})=>{
        return <Route key={path} exact path={path} component={Component} />;
      })}
      </Switch>
      <Footer />
    </div>
  );
}

export default Routes;
