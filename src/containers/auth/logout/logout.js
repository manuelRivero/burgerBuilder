import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './../../../redux/actions';
import Spinner from '../../../components/UI/spinner/spinner';

function Logout(props) {
    let logOut = <Spinner />

    if(props.isAuth ){
        props.onLogout()
        
    }else{
        logOut = <Redirect to="/" />
    }
    
  return (
    <>
    {logOut}
    </>
  );
}

const mapDsipatchToprops = dispatch =>{
    return{
        onLogout : () => { dispatch(actions.logOut())}
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.user.tokenId !== null
    }
}

export default withRouter(connect(mapStateToProps, mapDsipatchToprops)(Logout));
