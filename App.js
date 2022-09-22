<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet } from 'react-native';
import welcomeScreen from './screens/welcome_page'
import situationScreen from './screens/ChooseSituation'
import scanScreen from './screens/ScanFace_page'
import GraphScreen from './screens/GraphPage'
import RecordScreen from './screens/HealthRecords'
import DetailedRecordScreen from './screens/HealthRecordInDetail'
import ReportCardScreen from './Components/ReportCard'
import UploadDetailScreen from './screens/UploadDetails'
import ProfileScreen from './screens/Profile_page'
=======
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { ZoomOut } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [accident, setAccident] = useState("Not accident")
  const [gg, setgg] = useState("Null")
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(16);
  };
>>>>>>> 7c119848d804000539c90a806ac6500ee331c01b


  const isAccident = (x, y, z) => {
    let f = (x*x) + (y*y) + (z*z)
    let force = Math.sqrt(f)

    let g = force/9.81
    setgg(g)
    if(g > 1){
        setAccident("Light accident")
    }

    if(g > 2){
      setAccident("Accident")
    }
    return 

  }



  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
        
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
  isAccident(x,y,z)
  console.log(accident);
  }, [data.x, data.y, data.z]);



  const { x, y, z } = data;
  return (
<<<<<<< HEAD
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Welcome' component={welcomeScreen} options={{header:()=>null}}/>
    <Stack.Screen name='situation' component={situationScreen} options={{header:()=>null}}/>
    <Stack.Screen name='scan' component={scanScreen} options={{header:()=>null}}/>
    <Stack.Screen name='Graph' component={GraphScreen} options={{header:()=>null}}/>
    <Stack.Screen name='MedicalRecords' component={RecordScreen} options={{header:()=>null}}/>
    <Stack.Screen name='DetailedRecord' component={DetailedRecordScreen} options={{header:()=>null}}/>
    <Stack.Screen name='ReportCard' component={ReportCardScreen} options={{header:()=>null}}/>
    <Stack.Screen name='Profile' component={ProfileScreen} options={{header:()=>null}}/>
    <Stack.Screen name='UploadDetails' component={UploadDetailScreen} options={{header:()=>null}}/>

    
  </Stack.Navigator>
</NavigationContainer>
=======
    <ScrollView>
    <View style={styles.container}>
      
      <View><Image style={styles.accidentImage} source={require('./assets/accident.jpg')}/></View>
>>>>>>> 7c119848d804000539c90a806ac6500ee331c01b

      <Text style={styles.accidentText}>{accident}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text style={{fontSize:20, fontWeight: '700', color: 'white', backgroundColor: 'red'}}>{subscription ? 'Cancel' : 'On'}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity> */}
      </View>

      <View style={{marginTop: 130}}>
        <Text style={styles.text}>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
        <Text style={styles.text}>
          x: {round(x)} y: {round(y)} z: {round(z)}
        </Text>
        <Text style={styles.text}>{gg}</Text>
      </View>

    </View>
    </ScrollView>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}
const styles = StyleSheet.create({
<<<<<<< HEAD

});

export default App;
=======
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    // marginBottom: 500
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    width: 200,
    padding: 11,
    marginTop: 50,
    marginBottom: 50
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  accidentImage: {
    width: 380,
    height:270,
    marginTop: 130
  },
  accidentText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '700',
    marginTop:20
  }
});
>>>>>>> 7c119848d804000539c90a806ac6500ee331c01b
