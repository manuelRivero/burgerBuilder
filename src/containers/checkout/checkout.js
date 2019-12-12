import React, { Component } from 'react';
import CheckoutSummary from './../../components/checkoutSummary/checkoutSummary'

export default class Checkout extends Component {

  state={
    ingredients:{
      bacon:0,
      meat:0,
      cheese:0,
      salad:0
    }
    
  }

  componentDidMount(){
    const query = new URLSearchParams(this.props.location.search);
    console.log(query)
    const ingredients={}

    for(let param of query.entries()){
      console.log(param)
      ingredients[param[0]] = +param[1]
    }

    this.setState({ingredients})
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
        </div>

      </>
    )
  }
}
