import {StyleSheet, Text, View,Image, Pressable,Alert, Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Btn from '../Components/Btn';


const ScanFace = ({navigation}) =>{

  const onclick = () => { 
    navigation.navigate('Graph');
   }
   const pickFromCamera = async () =>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA)
    if(granted){
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        aspect:[1,1],
        quality:0.5
        
      })
      console.log(data)
    }
    else{
        Alert.alert("You need to give permission")
    }
   }


  return (
    <View style={styles.container} >
      <View style={styles.ImgHeadWrap}>
          <View style={styles.options}>
            <Image source={require("../assets/options.png")}/>
          </View>
          <View>
            <Text style={{fontSize:28,fontWeight:"700", marginTop:60,marginLeft:50}}>Hospital Portal</Text>
          </View>
      </View>

      <View style={styles.WelcomeWrap}>
          <View style={styles.WelcomeText}>
            <Text style={{fontSize:26,textAlign:'center',fontWeight:'600'}}>Scan the Patient to inform his family</Text>
          </View>
      </View>
      <View style={styles.scanWrap}>
        <View style={styles.scan}>

        </View>
      </View>
    <View style={{alignItems:'center'}}>
      <View style={styles.camera}>
     <Button  onPress={pickFromCamera} title={"Cam"} color={'black'}></Button>
     </View>
     </View>
      <View style={styles.buttonWrap}>
        <Pressable onPress={onclick}>
        <View style={styles.button2}>
          <Btn content={"Access Health Records"} />
        </View>
        </Pressable>
      </View>

      <View style={styles.fingerprint}>
        <Text style={{}}>Not Working?<Text style={{fontWeight:'700'}}> Use Fingerprint</Text></Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container:{
    
  },
  scan:{
    backgroundColor:"#D9D9D9",
    width:300,
    height:400,
    borderRadius:20
  },
  scanWrap:{
    alignItems:"center",
    marginTop:25
  },
  ImgHeadWrap:{
    flexDirection:'row'
  },
  WelcomeText:{
    width:350,
    marginTop:50,
  },
  WelcomeWrap:{
    alignItems:'center',
  },
  button2:{
    width:350,
    height:50,
    marginTop:20
  },
  buttonWrap:{
    alignItems:'center',
    // marginTop:15
  },
  options:{
    marginTop:40,
    marginLeft:15
  },
  fingerprint:{
    marginTop:30,
    alignItems:'center'
  },
  camera:{
    width:50,
    alignItems:'center',
    marginTop:10

  }
});

export default ScanFace;