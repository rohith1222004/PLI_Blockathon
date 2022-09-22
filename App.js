import {StyleSheet, Text, View,Image } from 'react-native';


import Report from './Components/ReportCard';

const App = () =>{

  return (

<View style={styles.container}>
  <View style={styles.options}>
    <Image source={require('./assets/options.png')}/>
  </View>
  <View style={styles.Head}>
    <Text style={{fontSize:30,fontWeight:'700',marginTop:15}}>Surya's Health Records</Text>
  </View>
    <View style={styles.Report1}>
     <Report ReportName={'Hematology'} date={'25-MAY-2022'} ID={'SURYANAYA0004'} hospName={'Graham Nursing Home'} RefDOC={' Dr. Sankar M.S.,M.Ch(Uro)'}/>
    </View>
    <View style={styles.Report2}>
    <Report ReportName={'Hematology'} date={'25-MAY-2022'} ID={'SURYANAYA0004'} hospName={'Graham Nursing Home'} RefDOC={' Dr. Sankar M.S.,M.Ch(Uro)'}/>
    </View>
</View>


  );
}

const styles = StyleSheet.create({
Report1:{
  marginTop:25,
  alignItems:'center',
},
Report2:{
  marginTop:10,
  alignItems:'center',
},
options:{
  marginTop:40,
  marginLeft:15
},
Head:{
  alignItems:'center'
}


});

export default App;