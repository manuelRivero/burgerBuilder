import React, { Component } from 'react';
import Order from './../../components/order/order';
import Spinner from './../../components/UI/spinner/spinner'

import WithErrorHandler from './../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'

import * as actions from './../../redux/actions/index';

import axios from './../../axios-orders'

 class Orders extends Component {

  componentDidMount(){
    this.props.fetchOrders()
  }
  
  render() {

    let order =  (this.props.orders.map(order => {
        return (<Order key={order.id} {...order} />)
      })
    );

    if(this.props.loading){
      order= <Spinner />
    }
    return (
      <>

      <div className="">
         {order}
      </div>
        
      </>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return ({
    fetchOrders: ()=> dispatch(actions.fetchOrder())
  })
}

const mapStateToProps = (state) => {
  console.log(state)
  return ({
    orders: state.order.orders
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Orders, axios)) ;