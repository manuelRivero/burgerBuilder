import React from 'react';
import logo from './logo.svg';
import  styles from './App.module.css';

import Layout from './components/layout/loyout';
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder'

function App() {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
