<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Button } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { ZoomOut } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';

export default function App() {

  const sound = useRef(new Audio.Sound());

    useEffect(() => {
      return () => sound.current.unloadAsync();
    }, []);
  
    const playSound = async () => {
      console.log("Loading Sound");
  
      await sound.current.createAsync(require("./assets/buzz.mp3"));
  
      console.log("playing sound");
  
      const checkLoaded = await sound.current.getStatusAsync();
      if (checkLoaded.isLoaded === true) {
        console.log("Error in Loading mp3");
      } else {
        await sound.current.playAsync();
      }
    };

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
=======
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
import FoodRecScreen from './screens/FoodRecom'
>>>>>>> 4f04e2b978ca5983f2181b7457ad3d60f6ee2963


const Stack = createStackNavigator();

const App = () => {  
  return (
<<<<<<< HEAD
    <ScrollView>
    <View style={styles.container}>
        
      
      <View><Image style={styles.accidentImage} source={require('./assets/accident.jpg')}/></View>
        
      {/* <View style={styles.container1}>
            <Button title="Play Sound" onPress={playSound} />
        </View> */}
=======
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
    <Stack.Screen name='FoodRec' component={FoodRecScreen} options={{header:()=>null}}/>
    
  </Stack.Navigator>
</NavigationContainer>
>>>>>>> 4f04e2b978ca5983f2181b7457ad3d60f6ee2963

 ) }

const styles = StyleSheet.create({
<<<<<<< HEAD
    container1: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 10,
      },
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
=======

});

export default App;
>>>>>>> 4f04e2b978ca5983f2181b7457ad3d60f6ee2963
