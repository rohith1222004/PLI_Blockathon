import {StyleSheet, Text, View,Image, ScrollView } from 'react-native';

import DetailedReport from './Components/DetailedReportCard';


const App = () =>{

return (

<View style={styles.container}>
<ScrollView>
    <View style={styles.options}>
      <Image source={require('./assets/options.png')}/>
    </View>
    <View style={styles.Head}>
      <Text style={{fontSize:30,fontWeight:'700',marginTop:15}}>Surya's Health Records</Text>
    </View>
  <View style={styles.report}>
    <DetailedReport/>
  </View>
  <View style={styles.ReportImgs}>
    <Image source={require('./assets/ReportImg.png')} />
    <Image source={require('./assets/ReportImg2.png')}/>
  </View>
  </ScrollView>
</View>


  );
}

const styles = StyleSheet.create({
container:{
  height:2000
},
options:{
  marginTop:40,
  marginLeft:15
},
Head:{
  alignItems:'center'
},
report:{
  alignItems:'center'
},
ReportImgs:{
  marginTop:40,
  alignItems:'center'
},


});

export default App;