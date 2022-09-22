

import { Pressable, StyleSheet, Text, View } from 'react-native';

const Btn = ({content}) =>{
  return (
    <View style={styles.container}>
      <View>
          <Pressable>
            <View style={styles.btn}>
              <Text style={{color:'white',fontSize:25}}>{content}</Text>
            </View>
          </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  btn:{
    backgroundColor:'#F02A2A',
    width:350,
    height:60,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
  }
});

export default Btn;