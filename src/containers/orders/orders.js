import React, { Component } from 'react';
import Order from './../../components/order/order';
import Spinner from './../../components/UI/spinner/spinner'

import WithErrorHandler from './../../hoc/withErrorHandler/withErrorHandler'

import axios from './../../axios-orders'

 class Orders extends Component {

  state={
    fetchedOrders:[],
    loading:true,
  }

  componentDidMount(){
    let fetchedOrders=[]
    axios.get('/orders.json').then( ({data}) =>{
      for(let key in data){
        fetchedOrders.push( {... data[key], id:key});
      }
      this.setState({ fetchedOrders,
                      loading:false})
    })
  }
  
  render() {

    let order =  (this.state.fetchedOrders.map(order => {
        return (<Order key={order.id} {...order} />)
      })
    );

    if(this.state.loading){
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

export default WithErrorHandler(Orders, axios);