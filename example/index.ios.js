/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Nav from "./example/Nav";
const Routes = {
  Nav:{
    name:"Nav",component:Nav
  }
}

class example extends Component {
  render(){
    return(
      <Navigator 
        initialRoute={Routes.Nav}
        renderScene={(route,navigator)=>{
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}/>
    )
  }
}

AppRegistry.registerComponent('example', () => example);
