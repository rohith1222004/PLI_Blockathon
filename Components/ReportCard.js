import {StyleSheet, Text, View } from 'react-native';


const Report = ({ReportName,date,ID,hospName,RefDOC}) =>{

return (
<View style={styles.container}>
   
    <View style={styles.outline}>
     <View style={styles.card}>
          <View style={styles.head}>
            <Text style={{fontSize:18,fontWeight:'700'}}>{ReportName} Report</Text>
                <View style={styles.date}>
                <Text style={{fontSize:14,fontWeight:'500'}}>{date}</Text>
                </View>
          </View>
          <View>
            <Text style={{fontSize:18,fontWeight:'700',color:'#1313DF',marginTop:25}}>Test ID: {ID}</Text>
            <Text style={{fontSize:18,fontWeight:'500',marginTop:12}}>Hosp/Lab: {hospName}</Text>
            <Text style={{fontSize:18,fontWeight:'500',marginTop:12}}>Ref. By: {RefDOC}</Text>
          </View>
            
             <View>
              <Text style={{fontSize:16,fontWeight:'500',color:'#1313DF',marginTop:12,marginLeft:200}}>Get Details</Text>
              <View style={styles.line}>
              </View>
            </View>
          
     </View>
    
  </View>
</View>

  );
}

const styles = StyleSheet.create({


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
    height:250,
    justifyContent:'center',
    borderRadius:25
  },

  card:{
  
    alignItems:'center'
  }
});

export default Report;