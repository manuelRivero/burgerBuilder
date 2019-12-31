import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/spinner/spinner';

import Buttom from './../../../components/UI/button/button';
import Input from './../../../components/UI/input/input'

import styles from './contactData.module.css';

import {createInput} from '../../../helpers/formHelper'

export default class ContactData extends Component {
    constructor(){
        super()
        this.state={
           form:{
             name: createInput('name', 'text', 'Your name', ''),
             email: createInput('email', 'email', 'Your email', ''),
             street: createInput('street', 'text', 'Your address', ''),
             postal: createInput('postal', 'text', 'Your Zip Code', ''),
             deleveryMethod: createInput('deleveryMethod', 'select', 'Your Zip Code', '', ['Fastesd', 'cheapest'])
           },
            loading:false
        }
    }

    clickHandler= (e)=>{
      e.preventDefault();
      
    this.setState({loading:true})
    const {ingredient, price}=this.props;
    const order={
      ingredient,
      price,
      address:{
        street:"siempreviva123",
        zipCode:"6060",
        contry:"argentina"
      },
      email:'manuel.enrique.r.v@gmail.com',
      deliverymethod:"fastest"
    }
    
    axios.post('/orders.json', order)
    .then( res => {
      this.setState({loading:false,});
      this.props.history.replace('/')})
    .catch( err => this.setState({loading:false}));

    }

    inputChangedHandler= ({target})=>{
      const updateform = {...this.state.form};
      let updateInput = {...updateform[target.name], value:target.value }
      updateform[target.name] = updateInput;

      this.setState( {form:updateform})
    }

  render() {
    let inputArray = [];
    for( let i in this.state.form){
      let input =this.state.form[i]
      inputArray.push({...input, key:input.name, label:input.name});
    }

    let form =(
            <form>
              {
                inputArray.map( data => {
                  return(<Input {...data} changed={this.inputChangedHandler}/> )
                })

                
              }
              <Buttom type="Success" />
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
