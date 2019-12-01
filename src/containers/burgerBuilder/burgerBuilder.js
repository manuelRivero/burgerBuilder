import React, { Component } from 'react';

import axios from '../../axios-orders';

import Aux from './../../hoc/auxComponent';
import Burger from '../../components/burger/burger';
import BurgerControls from '../../components/burger/buildControls/buildControls';
import Modal from '../../components/UI/modal/modal';
import OrderSummary from '../../components/burger/orderSummary/orderSummary';
import Spinner from '../../components/UI/spinner/spinner';

const INGREDIENT_PRICE={
  salad:0.5,
  bacon:0.6,
  cheese:0.4,
  meat:1.3
}

export default class BurgerBuilder extends Component {
  state={
    ingredients:{
      meat:0,
      salad:0,
      cheese:0,
      bacon:0
    },
    totalPrice:4.5,
    purchasable:false,
    purchasing:false,
    loading:false
  }

  addIngredientHandler=(ingredient)=>{

    this.setState( (oldState)=>{
      let ingredients={...oldState.ingredients, [ingredient]: oldState.ingredients[ingredient] + 1};
      let totalPrice = oldState.totalPrice + INGREDIENT_PRICE[ingredient];
      this.updatePurchaseState(ingredients)
      return {...oldState, totalPrice, ingredients}
    })
  }

  removeIngredientHandler=(ingredient)=>{
    if(this.state.ingredients[ingredient] === 0){
      return null
    }
    this.setState( (oldState)=>{
      let ingredients={...oldState.ingredients, [ingredient]: oldState.ingredients[ingredient] - 1};
      let totalPrice = oldState.totalPrice - INGREDIENT_PRICE[ingredient];
      this.updatePurchaseState(ingredients);
      return {...oldState, totalPrice, ingredients}
    })
  }

  updatePurchaseState=(ingredients)=>{
    let sum = Object.keys(ingredients).map( ingKeys =>{
      return ingredients[ingKeys];
    }).reduce( (sum, element)=>{
      return sum + element
    }, 0)

    this.setState({purchasable: sum > 0 })
  }

  purchasing=()=>{
    this.setState( oldState=> ({purchasing: true}))
  }

  cancelPurchasing=()=>{
    this.setState( oldState=> ({purchasing: false}))

  }

  continuePurchasing=()=>{
    this.setState({loading:true})
    const {ingredients, totalPrice}=this.state;
    const order={
      ingredients,
      totalPrice,
      address:{
        street:"siempreviva123",
        zipCode:"6060",
        contry:"argentina"
      },
      email:'manuel.enrique.r.v@gmail.com',
      deliverymethod:"fastest"
    }
    
    axios.post('/orders.json', order)
    .then( res => this.setState({loading:false, purchasing:false}))
    .catch( err => this.setState({loading:false}))
  }

  render() {
    let disabledInfo= {...this.state.ingredients};
    let orderSummary =(<OrderSummary 
                  ingredients={this.state.ingredients} 
                  cancelPurchasing={this.cancelPurchasing} 
                  continuePurchasing={this.continuePurchasing}
                  price={this.state.totalPrice}
               />)

    for( let key in disabledInfo){
      disabledInfo[key]= disabledInfo[key] <= 0;
    }

    if(this.state.loading){
      orderSummary= <Spinner />
    }
    
    return (
      <Aux>
          <Modal show={this.state.purchasing} hide={this.cancelPurchasing}>
              {orderSummary}
          </Modal>
          <Burger ingredient={this.state.ingredients} />
          <BurgerControls 
              addIngredient={this.addIngredientHandler} 
              desIngredient={this.removeIngredientHandler}
              disabledInfo={disabledInfo}
              price={this.state.totalPrice}
              purchasable={this.state.purchasable}
              ordered={this.purchasing}/>
      </Aux>
    )
  }
}
