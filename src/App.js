import React from 'react';
import logo from './logo.svg';
import  styles from './App.module.css';

import {Route} from 'react-router-dom'

import Layout from './components/layout/loyout';
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder';
import Checkout from './containers/checkout/checkout'

function App() {
  return (
    <Layout>
      <Route path='/'  exact component={BurgerBuilder}/>
      <Route path='/checkout' exact component={Checkout}/>
      
    </Layout>
  );
}

export default App;
