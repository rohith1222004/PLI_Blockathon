import {StyleSheet, Text, View } from 'react-native';


const DetailedReport = ({ReportName,date,ID,hospName,RefDOC,purpose,VerfDoc}) =>{

return (
<View style={styles.container}>
   
    <View style={styles.outline}>
     <View style={styles.card}>
          <View style={styles.head}>
            <Text style={{fontSize:25,fontWeight:'700'}}>{ReportName} Report</Text>
                <View style={styles.date}>
                <Text style={{fontSize:14,fontWeight:'500'}}>{date}</Text>
                </View>
          </View>
          <View>
            <Text style={{fontSize:22,fontWeight:'700',color:'#1313DF',marginTop:25}}>Test ID:<Text style={{fontSize:18,fontWeight:'500'}}>{ID}</Text></Text>
            <Text style={{fontSize:22,fontWeight:'700',marginTop:12}}>Hosp/Lab<Text style={{fontSize:18,fontWeight:'500'}}>{hospName}</Text></Text>
            <Text style={{fontSize:22,fontWeight:'700',marginTop:12}}>Ref. By: <Text style={{fontSize:18,fontWeight:'500'}}>{RefDOC}</Text></Text>
            <Text style={{fontSize:22,fontWeight:'700',marginTop:12}}>Test Purpose :<Text style={{fontSize:18,fontWeight:'500'}}> {purpose}</Text></Text>
            <Text style={{fontSize:22,fontWeight:'700',marginTop:12}}>Verified By :<Text style={{fontSize:18,fontWeight:'500'}}> {VerfDoc}</Text></Text>
          </View>
          <View style={styles.update}>
            <Text style={{fontSize:20,fontWeight:'500',color:'#1313DF',marginTop:20}}>Update</Text>
            <Text style={{fontSize:20,fontWeight:'500',marginLeft:50,color:'#D95857',marginTop:20}}>Report</Text>
          </View>
          
     </View>
    
  </View>
</View>

  );
}

const styles = StyleSheet.create({
container:{
  marginTop:50
},

  head:{
    flexDirection:'row'
  },
  date:{
    marginLeft:35,
    justifyContent:'center'
  },
  line:{
    backgroundColor:'blue',
    width:80,
    height:2,
    marginLeft:200
  },
  outline:{
    
    borderWidth:1.8,
    borderColor:'#D9D9D9',
    width:350,
    height:350,
    justifyContent:'center',
    borderRadius:25
  },

  card:{
  
    alignItems:'center'
  },
  update:{
    flexDirection:'row'
  }
});

export default DetailedReport;