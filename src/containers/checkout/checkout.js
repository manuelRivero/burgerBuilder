import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import CheckoutSummary from './../../components/checkoutSummary/checkoutSummary'
import ContactData from './contactData/contactData';


export default class Checkout extends Component {

  state={
    ingredients:{
      bacon:0,
      meat:0,
      cheese:0,
      salad:0
    }, price:0
    
  }

  componentDidMount(){
    const query = new URLSearchParams(this.props.location.search);
    const ingredients={}
    let price = 0;
    for(let param of query.entries()){
      if( param[0] === 'price'){
        price = param[1];
      }else{
              ingredients[param[0]] = +param[1]
      }
    }

    this.setState({ingredients, price})
  }

  
  checkoutCancelledHandler= ()=>{
    this.props.history.goBack();
  }
  checkoutContinueHandler= ()=>{
    this.props.history.replace('/checkout/contact-data');
  }
  render() {
    const ingredient={
      bacon:1,
      meat:1
    }

    return (
      <>
        <div  >
            <CheckoutSummary  
                  ingredient={this.state.ingredients}  
                  checkoutCancelled={this.checkoutCancelledHandler}
                  checkoutContinue={this.checkoutContinueHandler}/>

            <Route path={`/checkout/contact-data`}  render={ (props)=>{
                return ( <ContactData {...props} ingredient={this.state.ingredients} price={this.state.price}/>)
            }} />
        </div>

      </>
    )
  }
}
