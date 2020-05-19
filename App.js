/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStacknavigator,createAppContainer,  Text} from 'react-native'
import InitialScreen from './src/screens/FirstScreens'


const navigator = createStacknavigator(
{
  FirstScreen: InitialScreen,
},
{
  initialRouteName: 'FirstScreen'
}

);


const styles = StyleSheet.create({
 
  textStyle:{
    fontSize:3
  }
});

export default createAppContainer(navigator);
