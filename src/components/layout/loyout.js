
import React from 'react'
import Aux from './../../hoc/auxComponent';
import Toolbar from './../navigation/toolbar/toolbar';
import SideDrawer from './../navigation/sideDrawer/sideDrawer'
import styles from './layout.module.css'
export default class Layout extends React.Component{
  constructor(){
    super()
    this.state={
      showSideDrawer:false
    }
  }
  closeSideDrawerHandler = ()=>{
    this.setState({showSideDrawer:false})
  }
  toggleSideDrawerHandler = ()=>{
    this.setState( (oldState)=>{
      return {
        showSideDrawer: !oldState.showSideDrawer
      }
    })
  }
 render(){
          return (
            <Aux>  

                  <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} />
                  <SideDrawer showSideDrawer={this.state.showSideDrawer} closeSideDrawer={this.closeSideDrawerHandler}/>
                  <main className={styles.Content}>
                      {this.props.children}
                  </main>
            </Aux>
        )
    }
}
