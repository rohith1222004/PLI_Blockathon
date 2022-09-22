

import { Pressable, StyleSheet, Text, View } from 'react-native';

const GraphBtn = ({content}) =>{
  return (
    <View style={styles.container}>
      <View>
          <Pressable>
            <View style={styles.btn}>
              <Text style={{color:'black',fontSize:16,fontWeight:'700'}}>{content}</Text>
            </View>
          </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
    
  // },
  btn:{
    backgroundColor:'#E9E1FF',
    width:80,
    height:40,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    
  }
});

export default GraphBtn;