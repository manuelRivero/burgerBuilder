import React from 'react';
import Logo from './../logo/logo';
import NavigationItems from './../navigationItems/navigationItems';
import BackDrop from './../../UI/backdrop/backdrop'
import Aux from './../../../hoc/auxComponent'

import styles from './sideDrawer.module.css';

export default function sideDrawer(props) {
  let showClass = props.showSideDrawer ? styles.Open : styles.Closed;
  
  return (
    <Aux>
      <BackDrop show={props.showSideDrawer} clicked={props.closeSideDrawer}/>
      <div className={[styles.SideDrawer,showClass].join(' ')}>
            <div className={styles.Logo}>
               <Logo /> 
            </div>
            <nav onClick={props.closeSideDrawer}>
              <NavigationItems isAuth ={ props.isAuth }/>
            </nav>
      </div>
    </Aux>
  );
}
