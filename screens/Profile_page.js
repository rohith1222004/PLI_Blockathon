import {StyleSheet, Text, View,Image } from 'react-native';
import Btn from './Components/Btn';
import InputBox from './Components/InputBox';


const Profile = () =>{



  return (
    <View style={styles.container} >
        <View style={styles.options}>
          <Image source={require('./assets/options.png')} />
        </View>

        <View style={styles.ProfileName}>
          <Text style={{fontSize:30,fontWeight:'700'}}>Surya Narayanan</Text>
        </View>
        <View style={styles.ProfileImgWrap}>
          <View style={styles.profileImg}>
            <Image source={require('./assets/profile.png')} />
          </View>
        </View>
        <View>
          <Text style={{marginLeft:25,fontSize:18,marginTop:30}}>Phone Number </Text>
          <Text style={{marginLeft:25,fontSize:18,fontWeight:'700',marginTop:10}}>+91 9498844532</Text>
        </View>
        <View>
        <View style={styles.line}>
                
        </View>
          <Text style={{marginLeft:25,fontSize:18,marginTop:20}}>Gender </Text>
          <Text style={{marginLeft:25,fontSize:18,fontWeight:'700',marginTop:10}}>Male</Text>
        </View>
        <View style={styles.line}>
                
        </View>
        <View>
          <Text style={{marginLeft:25,fontSize:18,marginTop:20}}>Date of Birth</Text>
          <Text style={{marginLeft:25,fontSize:18,fontWeight:'700',marginTop:10}}>4/1/2004</Text>
        </View>

        <View style={styles.line}>
                
        </View>
        <View>
          <Text style={{marginLeft:25,fontSize:18,marginTop:20}}>Blood Group </Text>
          <Text style={{marginLeft:25,fontSize:18,fontWeight:'700',marginTop:10}}>B+</Text>
        </View>
        <View style={styles.line}>
                
        </View>
        <View style={styles.bluetxt}>
          <Text style={{color:'#734DDD',fontSize:20}}>Click Here to get his Medical Records</Text>
        </View>
        <View style={styles.line}>
                
        </View>
        <View style={styles.txtRed}>
          <Text style={{color:'#DD4D4D',fontSize:20}}>Upload Medical Records</Text>
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
  ProfileImgWrap:{
    marginTop:10,
    alignItems:'center',
  },
  btn:{
    alignItems:'center',
    marginTop:40
  },
  line:{
    marginTop:10,
    height:2,
    width:420,
    backgroundColor:'#D9D9D9'
  },
  txtRed:{
    alignItems:'center',
    marginTop:25,
  
  },
  bluetxt:{
    marginLeft:25,
    marginTop:30,
    marginBottom:25
  }

});

export default Profile;