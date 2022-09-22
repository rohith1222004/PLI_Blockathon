import {StyleSheet, Text, View,Image, ScrollView } from 'react-native';

import DetailedReport from '../Components/DetailedReportCard';


const HealthRecordInDetail = () =>{

return (
<ScrollView>
<View style={styles.container}>

    <View style={styles.options}>
      <Image source={require('../assets/options.png')}/>
    </View>
    <View style={styles.Head}>
      <Text style={{fontSize:30,fontWeight:'700',marginTop:15}}>Surya's Health Records</Text>
    </View>
  <View style={styles.report}>
    <DetailedReport ReportName={'Hematology'} date={'25-MAY-2022'} ID={'SURYANAYA0004'} hospName={'Graham Nursing Home'} RefDOC={'Dr. Sankar M.S.,M.Ch(Uro)'} purpose={'Regular checkup on the  Blood Level.'} VerfDoc={' Dr. Sankar M.S.,M.Ch(Uro)'}/>
  </View>
  <View style={styles.ReportImgs}>
    <Image source={require('../assets/ReportImg.png')} />
    <Image source={require('../assets/ReportImg2.png')}/>
  </View>
 
</View>
</ScrollView>


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

export default HealthRecordInDetail;