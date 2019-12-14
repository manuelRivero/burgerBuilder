import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/spinner/spinner';

import Buttom from './../../../components/UI/button/button';

import styles from './contactData.module.css';

export default class ContactData extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            address:{
                street:"",
                postalCode:""
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
  render() {
    let form =(
            <form>
                <input type="text" className={styles.Input} name="name" placeholder="Your name" />
                <input type="email" className={styles.Input} name="email" placeholder="Your email" />
                <input type="text" className={styles.Input} name="street" placeholder="Your street" />
                <input type="text" className={styles.Input} name="postal" placeholder="Your postal code" />
                <Buttom type="Success" clicked={this.clickHandler} > Continue </Buttom>
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
