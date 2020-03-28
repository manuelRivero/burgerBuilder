import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import CheckoutSummary from './../../components/checkoutSummary/checkoutSummary'
import ContactData from './contactData/contactData';
import * as actions from './../../redux/actions/index';

import {connect} from 'react-redux'


class Checkout extends Component {


  componentWillMount(){
    this.props.setRedirect();
  }
  
  checkoutCancelledHandler= ()=>{
    this.props.history.goBack();
  }
  checkoutContinueHandler= ()=>{
    this.props.history.replace('/checkout/contact-data');
  }

  updatePurchaseState=(ingredients)=>{
    
    if(!ingredients){
      return false
    }
    let sum = Object.keys(ingredients).map( ingKeys =>{
      return ingredients[ingKeys];
    }).reduce( (sum, element)=>{
      return sum + element
    }, 0)

    return sum > 0 ;
  }
  render() {
    if(!this.updatePurchaseState(this.props.ingredients) || this.props.redirect){
     this.props.history.replace('/');
     return null;
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
    ingredients: state.burger.ingredients,
    totalPrice: state.burger.totalPrice,
    redirect: state.order.redirect
  })
}

const mapDispachtToProps = dispatch =>{
  return {
    setRedirect: ()=> dispatch( actions.redirectOn())
  }
}

export default connect(mapstateToProps, mapDispachtToProps)(Checkout);