import React from 'react';
import Input from './../../components/UI/input/input'
import Button from './../../components/UI/button/button'
import {createInput} from './../../helpers/formHelper'

import styles from './auth.module.css';

class Auth extends React.Component{
    constructor(props){
        super()
        this.state={
            form:{
                email: createInput( 'email', 'email', 'Email Adress', '', null, { required:true, isEmail:true}),
                password: createInput( 'password', 'password', 'Password', '', null, { required:true, minLength:6})

            }
        }
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

          if (rules.isEmail){
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = re.test(String(value).toLowerCase()) && isValid;
          }
        return isValid;
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
          console.log("click")
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
  
    render(){
      
    let inputArray = [];
    for( let i in this.state.form){
      let input =this.state.form[i]
      inputArray.push({...input, key:input.name, label:input.name});
    }
        return(
            <div className={styles.Auth}>
                <form> {
                inputArray.map( data => {
                  return(<Input {...data} changed={this.inputChangedHandler} blur={this.inputBlurHandler}/> )
                })

                
              }
                </form>
            </div>
        )
    }
}


export default Auth;