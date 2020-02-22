import * as actions from './actionsTypes';
import axios from 'axios'


export const auth = (email, password, signIn)=>{
    return dispach => {
        let authData = {
            email,
            password,
            returnSecureToken:true
        }

        let url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjk-5N1Sh93rPMGVM8E8DzBm0e9ObdZtc';
        if(!signIn){
            url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjk-5N1Sh93rPMGVM8E8DzBm0e9ObdZtc';
        }
        axios.post(url, authData)
        .then( ({data}) => {
            dispach(authSuccess(data));
            dispach(checkAuth(data.expiresIn))
        })
        .catch(err =>{
            console.log(err.response.data.error)
            dispach(authFail(err))
        })
        dispach(authStart())
    }
}

export const authStart = ()=>{
    return({
        type:actions.AUTH_START
    })
}

export const authFail = (error)=>{
    return ({
        type: actions.AUTH_FAIL,
        payload:error
    })
}

export const authSuccess = ({idToken, refreshToken, localId})=>{
    return ({
        type: actions.AUTH_SUCCESS,
        payload:{idToken, refreshToken, localId}
    })
}

export const logOut = ()=>{
    return ({
        type:actions.AUTH_LOGOUT
    })
}
const checkAuth= (expirationTime)=>{
  return (dispach)=>{
    setTimeout( ()=>{
        dispach(logOut());
    }, parseInt(expirationTime) *1000 )
  }
}