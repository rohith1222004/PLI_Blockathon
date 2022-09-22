import {StyleSheet, Text, View,Image } from 'react-native';
import Btn from './Components/Btn';


const PatientDetails = () =>{



  return (
    <View style={styles.container} >
      <View style={styles.options}>
        <Image source={require("./assets/options.png")}/>
      </View>
      <View style={styles.WelcomeWrap}>
          <View style={styles.WelcomeText}>
            <Text style={{fontSize:30,textAlign:'center',fontWeight:'600'}}>Enter Patient Details</Text>
          </View>
      </View>

      <View style={styles.buttonWrap}>
        <View style={styles.button1}>
           <Btn content={"Upload/Scan new data"} />
        </View>

        <View style={styles.button2}>
          <Btn content={"Access Health Records"} />
        </View>

      </View>
     
    </View>

  );
}

const styles = StyleSheet.create({

  container:{
    
  },
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
    marginLeft:15
  }
});

export default PatientDetails;