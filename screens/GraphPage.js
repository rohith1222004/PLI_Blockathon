import {StyleSheet, Text, View,Image, Pressable } from 'react-native';
import BlackGraphBtn from '../Components/BlackGraphBtn';
import Btn from '../Components/Btn';
import GraphBtn from '../Components/GraphBtn';


const App = ({navigation}) =>{
const onclick = () => { 
navigation.navigate('MedicalRecords');
 }
 const ImageClicked = () => { 
  navigation.navigate('Profile');
   }
return (

<View style={styles.container}>

    <View style={styles.options}>
      <Image source={require('../assets/options.png')}/>
    </View>
    <View style={styles.Head}>
      <Text style={{fontSize:30,fontWeight:'700',marginTop:15}}>Surya Narayanan</Text>
    </View>
    <View style={styles.profileWrap}>
      <Pressable onPress={ImageClicked}>
      <View style={styles.profie}>
        <Image source={require("../assets/profile.png")}/>
      </View>
      </Pressable>
    </View>

    <View style={styles.NumEmail}>
      <Text style={{fontSize:18,fontWeight:'500'}}>9498844532</Text>
      <Text style={{fontSize:18,fontWeight:'500'}}>surayanarayanan20@gmail.com</Text>
    </View>
    
    <Pressable onPress={onclick}>
      <View style={styles.button}>
          <Btn content={'Access Medical Records'}/>
      </View>
    </Pressable>
   
    <View style={styles.wrapBtn}>
      <View style={styles.graphBtn}>
        <View style={styles.graBtn}>
          <GraphBtn content={"Day"}/>
        </View>
        <View style={styles.graBtn}>
          <GraphBtn content={'Week'}/>
        </View>
        <View style={styles.graBtn}>
          <GraphBtn content={'Month'}/>
        </View>
        <View style={styles.graBtn}>
        <BlackGraphBtn content={'All'}/>
        </View>
      </View>
    </View>

    <View style={styles.GraphImg}>
      <Image source={require('../assets/GraphImg.png')}/>
    </View>

</View>


  );
}

const styles = StyleSheet.create({
options:{
  marginTop:40,
  marginLeft:15
},
Head:{
  alignItems:'center'
},
profileWrap:{
  marginTop:20,
  alignItems:'center',
},
profile:{
  width:100,
  height:50
},
NumEmail:{
  alignItems:'center',
  marginTop:20
},
button:{
  marginTop:40,
  alignItems:'center'
},
graphBtn:{
  flexDirection:'row',
  margin:60
},
wrapBtn:{
alignItems:'center',
},
graBtn: {
  marginRight:10
},
GraphImg:{
  alignItems:'center',
}

});

export default App;