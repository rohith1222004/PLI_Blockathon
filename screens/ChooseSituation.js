import {StyleSheet, Text, View,Image } from 'react-native';
import Btn from './Components/Btn';

const ChooseSituation = () =>{

  return (
    <View style={styles.container} >
      <View style={styles.options}>
        <Image source={require("./assets/options.png")}/>
      </View>
      <View style={styles.WelcomeWrap}>
          <View style={styles.WelcomeText}>
            <Text style={{fontSize:30,textAlign:'center'}}>Choose the Situation</Text>
          </View>
      </View>

      <View style={styles.buttonWrap}>
        <View style={styles.button1}>
           <Btn content={"Emergency"} />
        </View>

        <View style={styles.button2}>
          <Btn content={"Health Records"} />
        </View>
        <View style={styles.button2}>
          <Btn content={"Food Recommendations"} />
        </View>
      </View>
     
    </View>

  );
}

const styles = StyleSheet.create({

  WelcomeText:{
    width:350,
    marginTop:150,
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

export default ChooseSituation;