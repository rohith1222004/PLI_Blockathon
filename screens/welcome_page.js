import {StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import Btn from './Components/Btn';

const Welcome_page = () =>{

  return (

    <View style={styles.container} >
      <View style={styles.options}>
        <Image source={require("./assets/options.png")}/>
      </View>
      <View style={styles.WelcomeWrap}>
          <View style={styles.WelcomeText}>
            <Text style={{fontSize:30,textAlign:'center',fontWeight:'600'}}>Welcome, How is your day today?</Text>
          </View>
      </View>

      <View style={styles.buttonWrap}>
        <View style={styles.button1}>
           <Btn content={"Sign in/ Sign Up as User"} />
        </View>

        <View style={styles.button2}>
          <Btn content={"Sign in/ Sign Up as Hospital"} />
        </View>
      </View>
     
    </View>


  );
}

const styles = StyleSheet.create({
  WelcomeText:{
    width:350,
    marginTop:200,
  },
  WelcomeWrap:{
    alignItems:'center',
  },
  button1:{
    width:350,
    height:50,
  },
  button2:{
    width:350,
    height:50,
    marginTop:75
  },
  buttonWrap:{
    alignItems:'center',
    marginTop:85
  },
  options:{
    marginTop:40,
    marginLeft:10
  }
});

export default Welcome_page;