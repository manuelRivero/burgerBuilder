import React, { Component } from 'react';
import CheckoutSummary from './../../components/checkoutSummary/checkoutSummary'

export default class Checkout extends Component {
  render() {
    const ingredient={
      bacon:1,
      meat:1
    }
    return (
      <>
        <div  >
            <CheckoutSummary  ingredient={ingredient}  />
        </div>

      </>
    )
  }
}
