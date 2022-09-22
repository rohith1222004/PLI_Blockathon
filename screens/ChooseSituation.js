import {StyleSheet, Text, View,Image, Pressable } from 'react-native';
import RedBtn from '../Components/RedBtn';
import Btn from '../Components/Btn';

const ChooseSituation = ({navigation}) =>{
  const onclick = () => { 
    navigation.navigate('scan');
   }
   const HealthReacords= () => { 
    navigation.navigate('MedicalRecords')
    }
  return (
    <View style={styles.container} >
      <View style={styles.options}>
        <Image source={require("../assets/options.png")}/>
      </View>
      <View style={styles.WelcomeWrap}>
          <View style={styles.WelcomeText}>
            <Text style={{fontSize:30,textAlign:'center',fontWeight:'600'}}>Choose the Situation</Text>
          </View>
      </View>

      <View style={styles.buttonWrap}>
        <Pressable onPress={onclick}>
          <View style={styles.button1}>
            <RedBtn content={"Emergency"} />
          </View>
        </Pressable>
      
      <Pressable onPress={HealthReacords}>
        <View style={styles.button2}>
          <Btn content={"Health Records"} />
        </View>
      </Pressable>
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
    marginLeft:15
  }
});

export default ChooseSituation;