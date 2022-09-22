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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1.5,
    width:300,
    height:50,
    borderRadius:10,
    textAlign:'center',
    fontSize:20
  }

});

export default InputBox;