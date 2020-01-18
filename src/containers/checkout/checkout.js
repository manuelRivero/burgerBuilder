import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import CheckoutSummary from './../../components/checkoutSummary/checkoutSummary'
import ContactData from './contactData/contactData';

import {connect} from 'react-redux'


class Checkout extends Component {



  
  checkoutCancelledHandler= ()=>{
    this.props.history.goBack();
  }
  checkoutContinueHandler= ()=>{
    this.props.history.replace('/checkout/contact-data');
  }

  updatePurchaseState=(ingredients)=>{
    let sum = Object.keys(ingredients).map( ingKeys =>{
      return ingredients[ingKeys];
    }).reduce( (sum, element)=>{
      return sum + element
    }, 0)

    return sum > 0 ;
  }
  render() {
    if(!this.updatePurchaseState(this.props.ingredients)){
     this.props.history.replace('/');
    }

    return (
      <>
        <div  >
            <CheckoutSummary  
                  ingredient={this.props.ingredients}  
                  checkoutCancelled={this.checkoutCancelledHandler}
                  checkoutContinue={this.checkoutContinueHandler}/>

            <Route path={`/checkout/contact-data`}  render={ (props)=>{
                return ( <ContactData {...props} />)
            }} />
        </div>

      </>
    )
  }
}

const mapstateToProps = state =>{
  return ({
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  })
}

export default connect(mapstateToProps, null)(Checkout);