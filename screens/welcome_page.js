import {StyleSheet, Text, View,Image,Pressable} from 'react-native';
import Btn from '../Components/Btn';

const Welcome_page = ({navigation}) =>{
  const onclick = () => { 
    navigation.navigate('situation');
   }


  return (

    <View style={styles.container} >
      
      <View style={styles.options}>
        <Image source={require("../assets/options.png")}/>
      </View>

      <View style={styles.wholeWrap}>
        <View style={styles.WelcomeWrap}>
            <View style={styles.WelcomeText}>
              <Text style={{fontSize:30,textAlign:'center',fontWeight:'600'}}>Welcome, How is your day today?</Text>
            </View>
        </View>

          <View style={styles.buttonWrap}>
            <Pressable onPress={onclick}>
              <View style={styles.button1}>
                <Btn content={"Sign in/Sign Up as User"} />
              </View>
            </Pressable>

            <View style={styles.button2}>
              <Btn content={"Sign in/Sign Up as Hospital"} />
            </View>
          </View>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  wholeWrap:{
    flex:1,
    justifyContent:'center',
  },
  WelcomeText:{
    width:350,

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
    marginTop:30,
    marginLeft:15,

  }
});

export default Welcome_page;