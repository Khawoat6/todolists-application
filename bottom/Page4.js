import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity} from 'react-native';

export default class Page4 extends React.Component {

  
  onPressNext()
  {
    this.props.navigation.navigate('Page5Screen')
  }

  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >

          <Text style={styles.txt}>ORGANISE ALL YOUR TASKS, LISTS AND TO-DO{"\n"}</Text>

          <Text style={styles.txt2}>Intuitive Design</Text>
          <Text style={styles.txt3}>
            • Lists To do was designed with simplicity and functionality.{"\n"}
            • stunning graphics make capturing ideas easy and awesome.{"\n"}
            • more than 150 category icons{"\n"}
          </Text>

          <Text style={styles.txt2}>Intelligent features</Text>
          <Text style={styles.txt3}>
            • delete all completed/uncompleted tasks immediately{"\n"}
            • duplicate lists{"\n"}
            • manage recently deleted items to instantly recover them{"\n"}
          </Text>

          <Text style={styles.txt2}>iCloud</Text>
          <Text style={styles.txt3}>
            • synchronise automatically your lists between your iOS devices, signed-in with the same iCloud account. You don’t have to do any setup!!!{"\n"}
            • stay organised from all your devices{"\n"}
          </Text>

          <Text style={styles.txt2}>Create a list for anything you want, highly flexible!!!</Text>
          <Text style={styles.txt3}>
            • shopping lists{"\n"}
            • to do{"\n"}
            • checklists{"\n"}
            • bucket lists{"\n"}
            • quick notes{"\n"}
            • anything you can think of .....{"\n"}
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
      paddingTop:20,
      paddingLeft:20,
      paddingRight:20,
      textAlign: 'left',
      fontSize:18,
  },
  txt2:{
      paddingTop:20,
      paddingLeft:20,
      paddingRight:20,
      textAlign: 'left',
      fontSize:14,
  },
  txt3:{
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    textAlign: 'left',
    fontSize:12,
}

})
