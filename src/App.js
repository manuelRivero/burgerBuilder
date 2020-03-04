import React from 'react';
import logo from './logo.svg';
import  styles from './App.module.css';

import {Route, withRouter} from 'react-router-dom'

import {connect} from 'react-redux';
import * as actions from './redux/actions';

import Layout from './components/layout/loyout';
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder';
import Checkout from './containers/checkout/checkout'
import Order from './containers/orders/orders';
import Auth from './containers/auth/auth'
import Logout from './containers/auth/logout/logout';

function App(props) {
   props.onCheckAuthState();

  return (
    <Layout>      
      <Route path='/checkout' component={Checkout}/> 
      <Route path='/orders' component={Order} />
      <Route path='/auth'  exact component={Auth}/>
      <Route path='/logout' exact component={Logout} />
      <Route path='/'  exact component={BurgerBuilder}/>
    </Layout>
  );
}

const mapDispatchToProps = dispatch =>{
  return {
    onCheckAuthState : () => {dispatch(actions.authState())}
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
