import React from 'react';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight,Slider
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ColumnSlider from 'react-native-column-slider';
import * as Brightness from 'expo-brightness';
import * as Permissions from 'expo-permissions';

export default class Page3 extends React.Component {
  state = {
      brightnessValue:0
    };
    async componentDidMount() {
        this.getPermissionsAsync();
      }
      getPermissionsAsync = async () => {
      await Permissions.askAsync(Permissions.SYSTEM_BRIGHTNESS);

      const { status } = await Permissions.getAsync(Permissions.SYSTEM_BRIGHTNESS);
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(1);
      }
   };
   componentWillUnmount() {
   }
   onChangebrightnessValue = value => {
    this.setState({brightnessValue:value*100})
    Brightness.setSystemBrightnessAsync(value)
    };



  render() {
    return (
      <LinearGradient
   colors={['#FFFFFF', '#000000']}
   style={{flex: 1}}>

  <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
  <Image source={{uri: 'https://img.icons8.com/ios/150/000000/sun.png'}}
       style={{width: 100, height: 100,}} />
    <ColumnSlider onChange={this.onChangebrightnessValue}
          height={300}
          width={100}
          borderRadius={50}
          minimumTrackTintColor='#FFFFFF'
          maximumTrackTintColor='#262424'
          textStyle={{ fontSize: 1 }}
    />
  </View>
  </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
   btn:{
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1
  },
  txt:{
      textAlign: 'center',
      fontSize:50
  },

})
