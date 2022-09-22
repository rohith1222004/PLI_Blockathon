import {StyleSheet, Text, TextInput, View } from 'react-native';


const InputBox = ({placeholder}) =>{



  return (
    <View style={styles.container}>
      <View>
      <TextInput style={styles.input} placeholder={placeholder}></TextInput>
      {/* <StatusBar style="auto" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  input:{
    borderWidth:1,
    width:320,
    height:60,
    borderRadius:10,
    textAlign:'center',
    fontSize:20,
  }  

});

export default InputBox;