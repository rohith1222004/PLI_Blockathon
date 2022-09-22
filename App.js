import { StyleSheet, Text, View } from 'react-native';
import Btn from './Components/Btn';



const App = () =>{



  return (
    
    <View style={styles.container}>
      <View style ={styles.welcomeWrap}>
          <View style={styles.welcomeText}>
            <Text style={{textAlign:'center',fontSize:30,fontWeight:'700'}}>Welcome, How is your day today ? </Text>
          </View>
        <View>
          
        </View>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  welcomeText:{
    marginTop:250,
    width:350,
  },
  welcomeWrap:{
    alignItems:'center'
  }
 
});

export default App;