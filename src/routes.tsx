import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login-page';
import { LOGIN_PATH, REGISTER_PATH, PROFILE_PATH, WISHLIST_PATH, PRODUCT_DETAILS_PATH, CART_PATH } from './configs/constants';
import RegisterPage from './pages/registration-page';
import HomePage from './pages/home-page';
import Footer from './components/footer';
import Header from './components/header';
import Wishlist from './pages/wishlist-page';

const routes = [
  {
  path:'/', name:'Home',component: <HomePage/>
},
  {
  path:LOGIN_PATH, name:'Login',component: <LoginPage />
},
  {
  path:REGISTER_PATH, name:'Register',component: <RegisterPage />
},
  {
  path:PROFILE_PATH, name:'Profile',component: 'profile page'
},
  {
  path:CART_PATH, name:'Cart',component: <Wishlist />
},
  {
  path:WISHLIST_PATH, name:'Wishlist',component: <Wishlist />
},
  {
  path:PRODUCT_DETAILS_PATH, name:'Details',component: 'details page'
},
];

export function Routes(): React.ReactElement {
  return (
    <div style={{ padding: '0' }}>
      <Header />
      <Switch>
        {routes.map(({name,path,component})=>{
          return <Route exact key={name} path={path}>{component}</Route>; 
        })}     
      </Switch>
      <Footer />
    </div>
  );
}

export default Routes;
