import React from 'react';
import logo from './logo.svg';
import  styles from './App.module.css';

import {Route} from 'react-router-dom'

import Layout from './components/layout/loyout';
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder';
import Checkout from './containers/checkout/checkout'
import Order from './containers/orders/orders';

function App() {
  return (
    <Layout>      
      <Route path='/checkout' component={Checkout}/> 
      <Route path='/orders' component={Order} />
      <Route path='/'  exact component={BurgerBuilder}/>
    </Layout>
  );
}

export default App;
