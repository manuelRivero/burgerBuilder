import React from "react";
import { connect } from "react-redux";
import Input from "./../../components/UI/input/input";
import Button from "./../../components/UI/button/button";
import { createInput, checkValidity } from "./../../helpers/formHelper";
import Spinner from "./../../components/UI/spinner/spinner";

import * as actions from "./../../redux/actions";

import styles from "./auth.module.css";
import { Redirect } from "react-router-dom";

class Auth extends React.Component {
  constructor(props) {
    super();
    this.state = {
      form: {
        email: createInput("email", "email", "Email Adress", "", null, {
          required: true,
          isEmail: true
        }),
        password: createInput("password", "password", "Password", "", null, {
          required: true,
          minLength: 6
        })
      },
      isSignUp: true
    };
  }


  inputBlurHandler = ({ target }) => {
    const updateform = { ...this.state.form };
    let updateInput = {
      ...updateform[target.name],
      touched: true
    };

    updateform[target.name] = updateInput;

    this.setState({ form: updateform });
  };

  inputChangedHandler = ({ target }) => {
    const updateform = { ...this.state.form };
    let updateInput = {
      ...updateform[target.name],
      value: target.value,
      dirty: true
    };

    updateInput.valid =checkValidity(
      target.value,
      updateform[target.name].validation
    );
    updateInput.wasInvalid = updateInput.valid && updateInput.touched;
    updateform[target.name] = updateInput;

    this.setState({ form: updateform });
  };

  submitHanler = e => {
    e.preventDefault();
    console.log("submit");
    const { email, password } = this.state.form;
    this.props.auth(email.value, password.value, this.state.isSignUp);
  };

  // for set login or sign up
  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        isSignUp: !prevState.isSignUp
      };
    });
  };

  render() {
    let inputArray = [];
    for (let i in this.state.form) {
      let input = this.state.form[i];
      inputArray.push({ ...input, key: input.name, label: input.name });
    }

    // auth form
    let auth = (
      <React.Fragment>
        <form onSubmit={this.submitHanler}>
          {" "}
          {inputArray.map(data => {
            return (
              <Input
                {...data}
                changed={this.inputChangedHandler}
                blur={this.inputBlurHandler}
              />
            );
          })}
          <Button type="Success">
            {this.state.isSignUp ? "Sign Up" : "Log In"}
          </Button>
        </form>
        <Button type="Success" clicked={this.switchAuthModeHandler}>
          {" "}
          {this.state.isSignUp
            ? "already have account ?"
            : "Create a new account"}
        </Button>
      </React.Fragment>
    );
    // alert message
    let errorAlert;

    // checking props 
    if (this.props.loading) {
      auth = <Spinner />;
    }
    if (this.props.isAuth){
      let redirectPath= this.props.isBuilding ? "/checkout" : "/"
      auth = <Redirect to={redirectPath} />
    }
    if (this.props.error.code === 400){
      errorAlert = <p>Ya existe una cuenta con ese email, prueba uno distinto o inicia sesion!</p>;
    }
    return (
      <div className={styles.Auth}>
        {this.props.error ? errorAlert : null}
        {auth}
      </div>
    );
  }
}

const mapDispatchToprops = dispatch => {
  return {
    auth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp))
  };
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isBuilding: state.burger.building,
    isAuth: state.auth.user.tokenId !== null
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Auth);
