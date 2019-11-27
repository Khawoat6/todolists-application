import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity} from 'react-native';

export default class Page2 extends React.Component {

  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >

          <Text
              style={styles.txt}>
              Search
          </Text>


        </View>
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
      textAlign: 'left',
      fontSize:50,
      padding:50,
      paddingLeft:20,
      paddingRight:20,

  },

})
