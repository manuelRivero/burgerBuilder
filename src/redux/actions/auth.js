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
            let expirationDate = new Date(new Date().getTime() + data.expiresIn*1000)
            localStorage.setItem('idToken', data.idToken);
            localStorage.setItem('expirationDate', expirationDate);

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

export const authSuccess = ({idToken, refreshToken, localId=null})=>{
    return ({
        type: actions.AUTH_SUCCESS,
        payload:{idToken, refreshToken, localId}
    })
}

export const logOut = ()=>{
    localStorage.removeItem('idToken')
    localStorage.removeItem('expirationDate')

    return ({
        type:actions.AUTH_LOGOUT
    })
}

// inicia un cronometro para un logout automatico
const checkAuth= (expirationTime)=>{
  return (dispach)=>{
    setTimeout( ()=>{
        dispach(logOut());
    }, parseInt(expirationTime) *1000 )
  }
}

//
export const authState = () =>{
    return (
        (dispach)=>{
            let idToken=localStorage.getItem('idToken');
            if(!idToken){
                console.log("idtoken")
                dispach(logOut());
            }else{
                const expirationDate = new Date(localStorage.getItem('expirationDate'))
                console.log(expirationDate)
                if(expirationDate < new Date()){
                    dispach(logOut())
                }else{
                    dispach(authSuccess(idToken, expirationDate));
                    checkAuth(expirationDate.getSeconds() -new Date().getSeconds)
                    
                }
            }
        }
    )
}