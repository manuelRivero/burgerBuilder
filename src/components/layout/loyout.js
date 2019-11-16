
import React from 'react'
import Aux from './../../hoc/aux';
import Toolbar from './../navigation/toolbar/toolbar';
import SideDrawer from './../navigation/sideDrawer/sideDrawer'
import styles from './layout.module.css'
export default (props) => {
  return (
      <Aux>  

            <Toolbar/>
            <SideDrawer/>
            <main className={styles.Content}>
                {props.children}
            </main>
      </Aux>
  )
}
