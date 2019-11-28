import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity, TextInput} from 'react-native';

export default class Page2 extends React.Component {

  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >

          <Text style={styles.txt}>Search</Text>
          <TextInput
                style={styles.txtIn2}
                placeholder="Search for a list or item"
                onChangeText={this.onChangeTextEmail}
          />



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

  txtIn2: {
    alignItems: 'center',
    // height: 50,
    backgroundColor: 'transparent',
    padding: 16,
    marginLeft:16,
    marginRight:16,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
  },

})
