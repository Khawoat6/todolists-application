import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity} from 'react-native';

export default class Page5 extends React.Component {


  onPressNext()
  {
    this.props.navigation.navigate('LoginScreen')
  }

  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >

          <View style={{flex:1}}>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=>this.onPressNext()}>
            <Text style={styles.txt}>
              LOGOUT
            </Text>
          </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
   btn:{
      alignItems: 'center',
      height:50,
      backgroundColor: '#000000',
      padding: 16,
      margin:16,
      borderRadius: 50,
      borderColor:'#000000',
      borderWidth : 1
  },
  txt:{
      textAlign: 'center',
      fontSize:13,
      color:'#ffffff',
      fontWeight:'bold',
  },

})
