import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-ionicons';

const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Page1,navigationOptions: {
  title: 'Lists To Do'}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Page2,navigationOptions: {
  header:null}},
});

const stackPage3 = createStackNavigator({
  Page3Screen:{screen:Page3,navigationOptions: {
  title: 'Brightness'}},
});

const stackPage4 = createStackNavigator({
  Page4Screen:{screen:Page4,navigationOptions: {
  title: 'About'}},
});

const stackPage5 = createStackNavigator({
  Page5Screen:{screen:Page5,navigationOptions: {
  title: 'Profile'}},
});



const navigator = createBottomTabNavigator({
    Home:{screen:stackPage1,navigationOptions: {
    }},
    Search:{screen:stackPage2,navigationOptions: {
    }},
    Brightness:{screen:stackPage3,navigationOptions: {
    }},
    About:{screen:stackPage4,navigationOptions: {
    }},
    Profile:{screen:stackPage5,navigationOptions: {
    }},
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName == 'Home') {
          iconName = 'md-home';
        }
        else if(routeName == 'Search'){
          iconName = 'ios-search';
        }
        else if(routeName == 'Brightness'){
          iconName = 'md-sunny';
        }
        else if(routeName == 'About'){
          iconName = 'ios-information-circle-outline';
        }
        else if(routeName == 'Profile'){
          iconName = 'md-person';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'black',
      // inactiveTintColor: 'gray',
      // activeBackgroundColor:'#00000000',
      labelStyle:{fontSize:12},
      tabStyle:{backgroundColor:'white',opacity:.8}
    }

})


export default createAppContainer(navigator);
