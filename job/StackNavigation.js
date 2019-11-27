import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page4 from './Page5'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const stack = createStackNavigator({
    Page1Screen:{screen:Page1,navigationOptions: {
    title: 'Page1'}},
    Page2Screen:{screen:Page2,navigationOptions: {
    title: 'Page2'}},
    Page3Screen:{screen:Page3,navigationOptions: {
    title: 'Page3'}},
    Page4Screen:{screen:Page4,navigationOptions: {
    title: 'Page4'}},
    Page5Screen:{screen:Page5,navigationOptions: {
    title: 'Page5'}},
  });

export default createAppContainer(stack);



