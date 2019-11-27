import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './Login.js';
import Login2 from './Login2.js';
import Register from './Register';
import BottomNavigation from './BottomNavigation.js';
import { createSwitchNavigator,createAppContainer} from 'react-navigation';

const navigator = createSwitchNavigator({
    LoginScreen:{screen:Login,navigationOptions: {
    title: 'Login'}},
    Login2Screen:{screen:Login2,navigationOptions: {
    title: 'Login2'}},
    RegisterScreen:{screen:Register,navigationOptions: {
    title: 'Register'}},
    BottomNavigationScreen:{screen:BottomNavigation,navigationOptions: {
    title: 'BottomNavigation'}},
  });

export default createAppContainer(navigator);