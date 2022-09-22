import {StyleSheet, Text, View,Image } from 'react-native';
import Btn from '../Components/Btn';
import InputBox from '../Components/InputBox';


const App = () =>{



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

        <View style={styles.btn}>
          <Btn content={'Upload Document'}/>
        </View>
        <View style={styles.line}>
                <Text>hello</Text>
        </View>
        <View style={styles.txtRed}>
          <Text style={{color:'#DD4D4D',fontSize:22}}>Upload Medical Records</Text>
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
    marginTop:35,
    
  }

});

export default App;