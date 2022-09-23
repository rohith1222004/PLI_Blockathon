import {StyleSheet, Text, View,Image,Pressable } from 'react-native';
import Btn from '../Components/Btn';
import InputBox from '../Components/InputBox';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const App = () =>{
  async function takeAndUploadPhotoAsync() {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
  
    if (result.cancelled) {
      return;
    }
  
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    let filename = localUri.split('/').pop();
  
    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
  
    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append('photo', { uri: localUri, name: filename, type });
  
    return await fetch(YOUR_SERVER_URL, {
      method: 'POST',
      body: formData,
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  }



  return (
    <View style={styles.container} >
        <View style={styles.options}>
          <Image source={require('../assets/options.png')} />
        </View>

        <View style={styles.ProfileName}>
          <Text style={{fontSize:30,fontWeight:'700'}}>Surya Narayanan</Text>
        </View>
        <View style={styles.ProfileImgWrap}>
          <View style={styles.profileImg}>
            <Image source={require('../assets/profile.png')} />
          </View>
        </View>
        <View style={styles.inp}>
          <InputBox placeholder={'Report Type'} />
          <View style={styles.inp1}>
            <InputBox placeholder={'Hospital Name'}/>
          </View>
          <View style={styles.inp1}>
            <InputBox placeholder={'Hospital ID'} />
          </View>
          <View style={styles.inp1}>
            <InputBox placeholder={'Doctor Signature'}/>
          </View>
        </View>
        <Pressable onPress={takeAndUploadPhotoAsync}>
        <View style={styles.btn}>
          <Btn content={'Upload Document'}/>
        </View>
        </Pressable>
        <View style={styles.line}>
                <Text>hello</Text>
        </View>
        
        <View style={styles.txtRed}>
          <Text style={{color:'#DD4D4D',fontSize:22}}>Add Medical Records</Text>
        </View>
        
    </View>

  );
}

const styles = StyleSheet.create({
  options:{
    marginTop:40,
    marginLeft:10
  },
  ProfileName:{
    alignItems:'center'
  },
  profileImg:{
    
  },
  ProfileImgWrap:{
    marginTop:10,
    alignItems:'center',
  },
  inp:{
    marginTop:80,
    alignItems:'center',
  },
  inp1:{
    alignItems:'center',
    marginTop:20,
  },
  btn:{
    alignItems:'center',
    marginTop:40
  },
  line:{
    marginTop:30,
    height:4,
    width:420,
    backgroundColor:'#D9D9D9'
  },
  txtRed:{
    alignItems:'center',
    marginTop:25,
    
  }

});

export default App;