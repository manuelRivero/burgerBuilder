import React from 'react';
import Aux from './../auxComponent';
import Modal from './../../components/UI/modal/modal';


export default function withErrorHandler(Component, axios) {
    
  return (
      class extends React.Component {
      
        constructor(){
            super()
            this.state={
                error:null
            }
            this.resInterceptor = axios.interceptors.response.use( res => res, (err)=>{
                this.setState({error:err})
            })

            this.reqInterceptor = axios.interceptors.request.use((req)=>{
                this.setState({error:null});
                return req;
            })
        }      
        
        componentWillUnmount(){
            //axios.interceptors.request.reject(this.reqInterceptor);
            //axios.interceptors.response.reject(this.resInterceptor)

        }

        closeClickHandler=()=>{
            this.setState({error:null})
        }
          render(){
            return (
                <Aux>
                    <Modal show={this.state.error} hide={this.closeClickHandler}>
                        <p>{this.state.error? this.state.error.message : null}</p>
                    </Modal>
                    <Component {...this.props} />
                </Aux>)
          }
      }
  );
}
