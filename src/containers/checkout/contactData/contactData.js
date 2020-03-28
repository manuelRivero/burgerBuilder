import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../redux/actions/orders'
import Spinner from '../../../components/UI/spinner/spinner';

import Button from './../../../components/UI/button/button';
import Input from './../../../components/UI/input/input'

import styles from './contactData.module.css';

import {createInput, checkValidity} from '../../../helpers/formHelper'

 class ContactData extends Component {
    constructor(){
        super()
        this.state={
           form:{
             name: createInput('name', 'text', 'Your name', '', null, { required:true, minLength:3}),
             email: createInput('email', 'email', 'Your email', '', null, { required:true, minLength:3}),
             street: createInput('street', 'text', 'Your address', '', null, { required:true, minLength:3}),
             postal: createInput('postal', 'text', 'Your Zip Code', '', null, { required:true, minLength:3}),
             deleveryMethod: createInput('deleveryMethod', 'select', 'Your Zip Code', '', ['Fastesd', 'cheapest'])
           }
        }
    }

    submitHandler= (e)=>{
      e.preventDefault();
      
    const orderData ={};

    for (let inputKey in this.state.form){
      orderData[inputKey] = this.state.form[inputKey].value;
    }
    
    const {ingredients, totalPrice, tokenId}=this.props;
    const order={
      ingredients,
      totalPrice,
      orderData,
      tokenId
    }
    this.props.submitContactData(order);
    }

    inputBlurHandler=({target})=>{
      console.log("blur")
      const updateform = {...this.state.form};
      let updateInput = {
           ...updateform[target.name],
           touched: true
          };

          updateform[target.name] = updateInput;
          
      this.setState( {form:updateform})
    }


    inputChangedHandler= ({target})=>{
      const updateform = {...this.state.form};
      let updateInput = {
           ...updateform[target.name],
           value:target.value,
           dirty:true
          };

      updateInput.valid = checkValidity(target.value, updateform[target.name].validation); 
      updateInput.wasInvalid = updateInput.valid && updateInput.touched;
      updateform[target.name] = updateInput;

      
      this.setState( {form:updateform})
    }
    

  render() {
    let formIsValid = true;
    
    //handling submission state
    for(let input in this.state.form){
      formIsValid = this.state.form[input].valid && formIsValid;
    }
    let inputArray = [];
    for( let i in this.state.form){
      let input =this.state.form[i]
      inputArray.push({...input, key:input.name, label:input.name});
    }

    let form =(
            <form onSubmit={this.submitHandler}>
              {
                inputArray.map( data => {
                  return(<Input {...data} changed={this.inputChangedHandler} blur={this.inputBlurHandler}/> )
                })

                
              }
              <Button type="Success" disabled={!formIsValid} >Continue</Button>
            </form>
    )

    if(this.props.loading){
      form = (  <Spinner />  );
    }
    return (
      <>
        <div className={styles.ContactData}>
            <h4>Enter your contact data</h4>
            {form}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return ({
    ingredients: state.burger.ingredients,
    totalPrice: state.burger.totalPrice,
    loading: state.order.loading,
    tokenId: state.auth.user.tokenId
  })
}

const mapDiscpachtToProps = dispatch => {
  return ( {
      submitContactData : (order) => dispatch(actions.purchaseBurger(order))
  })
}

export default connect( mapStateToProps, mapDiscpachtToProps) (ContactData)
