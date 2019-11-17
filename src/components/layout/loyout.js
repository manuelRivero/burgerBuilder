
import React from 'react'
import Aux from './../../hoc/auxComponent';
import Toolbar from './../navigation/toolbar/toolbar';
import SideDrawer from './../navigation/sideDrawer/sideDrawer'
import styles from './layout.module.css'
export default class Layout extends React.Component{
  constructor(){
    super()
    this.state={
      showSideDrawer:true
    }
  }
  closeSideDrawerHandler = ()=>{
    this.setState({showSideDrawer:false})
  }
 render(){
          return (
            <Aux>  

                  <Toolbar/>
                  <SideDrawer showSideDrawer={this.state.showSideDrawer} closeSideDrawer={this.closeSideDrawerHandler}/>
                  <main className={styles.Content}>
                      {this.props.children}
                  </main>
            </Aux>
        )
    }
}
