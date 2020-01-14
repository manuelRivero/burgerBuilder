import React, { Component } from 'react';

import axios from '../../axios-orders';

//components

import Aux from './../../hoc/auxComponent';
import Burger from '../../components/burger/burger';
import BurgerControls from '../../components/burger/buildControls/buildControls';
import Modal from '../../components/UI/modal/modal';
import OrderSummary from '../../components/burger/orderSummary/orderSummary';
import Spinner from '../../components/UI/spinner/spinner';

import WithErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

// redux

import {connect} from 'react-redux';

import * as actions from './../../redux/actions/index';

 class BurgerBuilder extends Component {
  state={
    purchasable:false,
    purchasing:false,
    loading:false
  }

  addIngredientHandler=(ingredient)=>{
    this.props.addIngredient(ingredient);
    this.updatePurchaseState(this.props.ingredients)
    /*
    this.setState( (oldState)=>{
      let ingredients={...oldState.ingredients, [ingredient]: oldState.ingredients[ingredient] + 1};
      let totalPrice = oldState.totalPrice + INGREDIENT_PRICE[ingredient];
      this.updatePurchaseState(ingredients)
      return {...oldState, totalPrice, ingredients}
    }) */
  }

  removeIngredientHandler=(ingredient)=>{
    if(this.props.ingredients[ingredient] === 0){
      return null
    }
    this.props.removeIngredient(ingredient);
   /* this.setState( (oldState)=>{
      let ingredients={...oldState.ingredients, [ingredient]: oldState.ingredients[ingredient] - 1};
      let totalPrice = oldState.totalPrice - INGREDIENT_PRICE[ingredient];
      this.updatePurchaseState(ingredients);
      return {...oldState, totalPrice, ingredients}
    })

    */
  }

  updatePurchaseState=(ingredients)=>{
    let sum = Object.keys(ingredients).map( ingKeys =>{
      return ingredients[ingKeys];
    }).reduce( (sum, element)=>{
      return sum + element
    }, 0)

    return sum;
  }

  purchasing=()=>{
    this.setState( oldState=> ({purchasing: true}))
  }

  cancelPurchasing=()=>{
    this.setState( oldState=> ({purchasing: false}))

  }

  continuePurchasing=()=>{
    
    let queryParams = [];
    
    this.props.history.push('/checkout');
  }

  
  render() {
    let disabledInfo= {...this.props.ingredients};
    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />
    let orderSummary = null

    for( let key in disabledInfo){
      disabledInfo[key]= disabledInfo[key] <= 0;
    }

    if(this.state.loading){
      orderSummary= <Spinner />
    }

    if(this.props.ingredients){

      burger = ( <Aux>
           <Burger ingredient={this.props.ingredients} />
           <BurgerControls 
               addIngredient={this.addIngredientHandler} 
               desIngredient={this.removeIngredientHandler}
               disabledInfo={disabledInfo}
               price={this.props.totalPrice}
               purchasable={this.updatePurchaseState(this.props.ingredients)}
               ordered={this.purchasing}/>
           </Aux>
           );
      orderSummary =(<OrderSummary 
            ingredients={this.props.ingredients} 
            cancelPurchasing={this.cancelPurchasing} 
            continuePurchasing={this.continuePurchasing}
            price={this.props.totalPrice}
        />)
    }
    
    return (
      <Aux>
          <Modal show={this.state.purchasing} hide={this.cancelPurchasing}>
              {orderSummary}
          </Modal>
              {burger}
      </Aux>
    )
  }
}

const mapStateToProps = state =>{
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  }
}

const mapDispachToProps = dispatch =>{
  return {
    addIngredient: (ingredient)=>dispatch(actions.addIngredient(ingredient)),
    removeIngredient: (ingredient)=>dispatch(actions.removeIngredient(ingredient))
  }
}

export default connect(mapStateToProps, mapDispachToProps)(WithErrorHandler(BurgerBuilder, axios));
