import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity, AsyncStorage,} from 'react-native';

export default class Page5 extends React.Component {


  state = {
    value:''
  };

  onPressNext()
  {
    this.props.navigation.navigate('LoginScreen')
  }

  onPressProfile()
  {
    // this.props.navigation.navigate('LoginScreen')
    this._retrieveData()
  }


  _retrieveData = async () => {
    try {
      this.setState({value: await AsyncStorage.getItem('@MySuperStore:key')})
      if (this.state.value !== null) {
        // We have data!!
        console.log(this.state.value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };




  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >
          <Text style={styles.txt2}>{this.state.value}</Text>
          <View style={{flex:1, marginTop: 400, flexDirection: 'row', justifyContent: 'center'}} >
                <TouchableOpacity
                style={styles.btn_profile}
                onPress={()=>this.onPressProfile()}>
                <Text style={styles.txt3}>SHOW PROFILE</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                    style={styles.btn_logout}
                    onPress={()=>this.onPressNext()}>
                    <Text style={styles.txt}>LOGOUT</Text>
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

  btn_profile:{
      alignItems: 'center',
      width:160,
      height:50,
      backgroundColor: 'transparent',
      padding: 16,
      margin:16,
      borderRadius: 50,
      borderColor:'#000000',
      borderWidth : 1
  },

  btn_logout:{
    alignItems: 'center',
    width:160,
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


  txt2:{
    textAlign: 'center',
    fontSize:30,
    color:'#000000',
    fontWeight:'bold',
    marginTop:100,
},

txt3:{
  textAlign: 'center',
  fontSize:13,
  color:'#000000',
  fontWeight:'bold',
},


})
