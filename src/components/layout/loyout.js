
import React from 'react'
import Aux from './../../hoc/auxComponent';
import Toolbar from './../navigation/toolbar/toolbar';
import SideDrawer from './../navigation/sideDrawer/sideDrawer'
import styles from './layout.module.css'
import { connect } from 'react-redux';
class Layout extends React.Component{
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

                  <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} isAuth={this.props.isAuth} />
                  <SideDrawer showSideDrawer={this.state.showSideDrawer} isAuth={this.props.isAuth} closeSideDrawer={this.closeSideDrawerHandler}/>
                  <main className={styles.Content}>
                      {this.props.children}
                  </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
  return {
    isAuth : state.auth.user.tokenId !== null
  }
}

export default connect(mapStateToProps, null)(Layout)
