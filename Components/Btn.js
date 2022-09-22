
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Btn = ({content}) =>{
  const [clicked,setclicked] = useState('no clicked the Button')
  const [count,setcount]  = useState(0)

  const btnpress = () => { 
      
      setcount(count+1)

      if(count%2==0){
        setclicked('clicked Button')
      }
      else{
        setclicked("unclicked Button")
      }
   }

  return (
    <View style={styles.container}>
      <View style={{marginTop:20}}>
          <Pressable onPress={btnpress}>
            <View style={styles.btn}>
              <Text style={{color:'white',fontSize:25}}>{content}</Text>
            </View>
          </Pressable>
      </View>
      <Text style={{margin:20}}>{clicked}</Text>
      <Text>clicked : {count} times</Text>
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
  btn:{
    backgroundColor:'black',
    width:350,
    height:60,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    
  }
});

export default Btn;