import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity, TextInput,AsyncStorage, ScrollView,} from 'react-native';
import Items2 from './Items2'
import Items3 from './Items3'
import Items4 from './Items4'
import database from '../components/Database'
import { LinearGradient } from 'expo-linear-gradient'

export default class Page2 extends React.Component {

  constructor(props) {
    super(props)
  
  }
  
  state = {
    // writeText:'',
    text: null,
    readText: '',
  };



  onPressText= async() => {
    await AsyncStorage.setItem('key1',this.state.text);
  };

  onPressRead=async()=>{
    const value = await AsyncStorage.getItem('key1');
    this.setState({readText:value});
  }

  state = {
    text: null
  };

  componentDidMount() {
    this.update();
  }

  onChangeText = text => this.setState({ text });

  onPressAdd = () => {
    this.addText();
    this.setState({ text: null });
  };

  addText() {
    if (this.state.text === null || this.state.text === "") {
      return false;
    }

    database.putText(this.state.text, this.add_text_success, this.add_text_fail);


  };

  add_text_success=async()=>{
    this.update();
  }

  add_text_fail=async(error)=>{
    console.log(error);
  }

  change_Complete=(id)=>{
    database.updateText2(id);
    this.update();
  }

  change_Doing=(id)=>{
    database.updateText(id);
    this.update();
  }


  delete_Complete=(id)=>{
    database.deleteText(id);
    this.update();
  }

  update (){
    this.todo.update();
    this.todone.update();
    this.todoing.update();
  };





  render() {
    return (

      <LinearGradient
       colors={['#FFFFFF', '#FFFFFF']}
       style={{flex: 1}}>


        <Text style={styles.txt}>Search</Text>
        <View style={{flex:1,justifyContent: 'center', marginTop:16,}}>
              <View style={{flex: 1, flexDirection: 'row', alignSelf:'center', marginTop:16, }}>
                <View>
                <TextInput 
                  style={styles.txtIn2}
                  placeholder="Search for a list or item"
                  onChangeText={this.onChangeText}
                  />
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.btn_register}
                    onPress={this.onPressAdd}>
                    <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{flex: 7,flexDirection:'column', marginTop:16}}>
                  <ScrollView style={styles.listArea}>
                    <Items2
                        ref={todo => (this.todo = todo)}
                        onPressTodo={this.delete_Complete}
                          />
                    <Items3
                        ref={todoing => (this.todoing = todoing)}
                        onPressDoing={this.change_Complete}
                          />
                    <Items4
                        ref={todone => (this.todone = todone)}
                        onPressComplate={this.delete_Complete}
                          />
                   </ScrollView>
                
              </View>
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
      textAlign: 'left',
      fontSize:50,
      padding:50,
      paddingLeft:20,
      paddingRight:20,

  },

  txtIn2: {
    alignItems: 'center',
    width:280,
    height:50,
    backgroundColor: 'transparent',
    padding: 16,
    marginLeft:16,
    marginRight:16,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
  },

  btn_register:{
    alignItems: 'center',
    width:50,
    height:50,
    backgroundColor: '#000000',
    padding: 16,
    marginRight:16,
    borderRadius: 50,
    borderColor:'#000000',
    borderWidth : 1
  },

  listArea: {
    backgroundColor: "transparent",
    flex: 1,
    // paddingTop: 16
  },

})
