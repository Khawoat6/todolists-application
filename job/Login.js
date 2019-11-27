import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity, Image} from 'react-native';

export default class Login extends React.Component {


  onPressLogin()
  {
    this.props.navigation.navigate('Login2Screen')
  }

  onPressRegister(){
    this.props.navigation.navigate('RegisterScreen')
  }

  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >
          <Image source = {{uri:'https://i.pinimg.com/originals/52/c6/48/52c648957e348a41b1f97af759a2fe98.jpg'}} style = {{  height: 650 }}/>
          <View style={{flex: 1,flexDirection: 'row', justifyContent: 'center',}} >
            <View>
              <TouchableOpacity
              style={styles.btn_login}
              onPress={()=>this.onPressLogin()}>
              <Text style={styles.txt2}>
                LOGIN
              </Text>
            </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
              style={styles.btn_register}
              onPress={()=>this.onPressRegister()}>
              <Text style={styles.txt}>
                REGISTER
              </Text>
            </TouchableOpacity>
            </View>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  btn_login:{
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

btn_register:{
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
  fontSize:13,
  color:'#000000',
  fontWeight:'bold',
},

})