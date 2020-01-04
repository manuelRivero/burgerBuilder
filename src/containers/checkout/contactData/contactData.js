import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/spinner/spinner';

import Button from './../../../components/UI/button/button';
import Input from './../../../components/UI/input/input'

import styles from './contactData.module.css';

import {createInput} from '../../../helpers/formHelper'

export default class ContactData extends Component {
    constructor(){
        super()
        this.state={
           form:{
             name: createInput('name', 'text', 'Your name', '', null, { required:true, minLength:3}),
             email: createInput('email', 'email', 'Your email', '', null, { required:true, minLength:3}),
             street: createInput('street', 'text', 'Your address', '', null, { required:true, minLength:3}),
             postal: createInput('postal', 'text', 'Your Zip Code', '', null, { required:true, minLength:3}),
             deleveryMethod: createInput('deleveryMethod', 'select', 'Your Zip Code', '', ['Fastesd', 'cheapest'])
           },
            loading:false
        }
    }

    submitHandler= (e)=>{
      e.preventDefault();
      
    this.setState({loading:true})
    const orderData ={};

    for (let inputKey in this.state.form){
      orderData[inputKey] = this.state.form[inputKey].value;
    }
    console.log(orderData)
    const {ingredient, price}=this.props;
    const order={
      ingredient,
      price,
      orderData
    }
    
    axios.post('/orders.json', order)
    .then( res => {
      this.setState({loading:false,});
      this.props.history.replace('/')})
    .catch( err => this.setState({loading:false}));

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

      updateInput.valid = this.checkValidity(target.value, updateform[target.name].validation); 
      updateInput.wasInvalid = updateInput.valid && updateInput.touched;
      updateform[target.name] = updateInput;

      
      this.setState( {form:updateform})
    }

    checkValidity(value, rules){
      let isValid= true;
      
      if(!rules){
        return isValid;
      }
        if( rules.required){
          isValid = value.trim() !== "" && isValid;
        }

        if( rules.minLength){
          isValid = value.length >= rules.minLength && isValid;
        }
      return isValid;
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

    if(this.state.loading){
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
