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
            console.log(data)
            let expirationDate = new Date(new Date().getTime() + data.expiresIn*1000)
            localStorage.setItem('idToken', data.idToken);
            localStorage.setItem('expirationDate', expirationDate);

            dispach(authSuccess(data.idToken));
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

export const authSuccess = (idToken)=>{
    return ({
        type: actions.AUTH_SUCCESS,
        payload:{tokenId:idToken}
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
        console.log("expiracion automatica")

        dispach(logOut());
    }, parseInt(expirationTime) * 1000)
  }
}

// obtiene los datos del local storage para gestionar el estado de autenticacion
export const authState = () =>{
    console.log("checkin auth")
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
                    dispach(authSuccess(idToken));
                    let expirationTime = (expirationDate.getTime() -new Date().getTime())
                    console.log(expirationTime / 1000)
                    checkAuth(expirationTime)
                    
                }
            }
        }
    )
}