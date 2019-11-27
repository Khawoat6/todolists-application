import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,TextInput} from 'react-native';



import { LinearGradient } from 'expo-linear-gradient'
import database from './Database'


export default class Register extends React.Component {

  state = {
    email:'',
    password:'',
    name:'',
    phone:'',
  };

  onPressAddAccount = () => {
    account={
      name:this.state.name,
      phone:this.state.phone,
      email:this.state.email,
      password:this.state.password,
    }

    //console.log(account);
    database.createAccount2(account,this.add_Account_success,this.add_Account_fail);

  };

  add_Account_success=async(id)=>{
    account={
      name:this.state.name,
      phone:this.state.phone,
      email:this.state.email,
      password:this.state.password,
    }
    database.createAut(account,this.add_Aut_success,this.add_Aut_fail);
  }

  add_Account_fail=async()=>{
      console.log('Create Account fail');
  }

  add_Aut_success=async()=>{
    this.props.navigation.navigate('Login2Screen')


  }

  add_Aut_fail=async(error)=>{
    Alert.alert(error);
  }

  onChangeTextEmail = email => this.setState({email});
  onChangeTextpassword = password => this.setState({password});
  onChangeTextname = name => this.setState({name});
  onChangeTextphone = phone => this.setState({phone});
  onPressnext= async() => {
    this.props.navigation.navigate('Login2Screen')

  };
  onPressblack= async() => {
    this.props.navigation.navigate('LoginScreen')
  };


  render() {
    return (
      <LinearGradient
       colors={['#FFFFFF', '#FFFFFF']}
       style={{flex: 1}}>


        <View style={{ flex: 1, marginTop: 50 }}>
          <View style={{ flex: 1, marginTop: 50 }}>
            <Text style={styles.txt1}>Register</Text>

            <View style={{ flex: 1, marginTop: 50 }}>
              <TextInput
                  style={styles.txtIn2}
                  placeholder="firstname"
                  onChangeText={this.onChangeTextname}
              />
              <Text style={styles.txt}> </Text>
              <TextInput
                  style={styles.txtIn2}
                  placeholder="lastname"
                  onChangeText={this.onChangeTextphone}
              />
              <Text style={styles.txt}> </Text>
              <TextInput
                  style={styles.txtIn2}
                  placeholder="email"
                  onChangeText={this.onChangeTextEmail}
              />
              <Text style={styles.txt}> </Text>
              <TextInput
                  style={styles.txtIn2}
                  placeholder="password"
                  onChangeText={this.onChangeTextpassword}
              />
            </View>

          </View>
        </View>
        <View style={{flex: 1,marginTop:60}}>
            <TouchableOpacity
              style={styles.viewBtn}
              onPress={this.onPressAddAccount}>
              <Text style={styles.txt}>SIGNUP</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 13,color: 'black',margin: 5, paddingLeft:16, paddingRight:16,}}>By signing up, you agree to Photo’s<Text style={{fontSize: 13,color: 'black',margin: 5,textDecorationLine : 'underline'}}> Terms of Service </Text><Text style={{fontSize: 13,color: 'black',margin: 5}}>and</Text><Text style={{fontSize: 13,color: 'black',margin: 5,textDecorationLine : 'underline'}}> Privacy Policy.</Text></Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({

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
  viewBtn: {
    // height: 50,
    backgroundColor: 'black',
    padding: 16,
    marginTop:100,
    marginLeft:16,
    marginRight:16,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
  },
  txt:{
    textAlign: 'center',
    fontSize:13,
    color:'#ffffff',
    fontWeight:'bold',
  },
  txt1:{

    fontSize: 40,
    color: '#000000',
    margin: 5,
    marginLeft : 16,
    marginEnd : 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt2:{
    fontSize: 13,
    color: 'black',
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    textDecorationLine : 'underline'
  },

  txt3:{
    fontSize: 13,
    color: 'black',
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
  },


});
