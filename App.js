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


  const isAccident = (x, y, z) => {
    let f = (x*x) + (y*y) + (z*z)
    let force = Math.sqrt(f)

    let g = force/9.81
    setgg(g)
    if(g > 1){
        setAccident("Light accident");
        // playSound();
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
    <ScrollView>
    <View style={styles.container}>
        
      
      <View><Image style={styles.accidentImage} source={require('./assets/accident.jpg')}/></View>
        
      {/* <View style={styles.container1}>
            <Button title="Play Sound" onPress={playSound} />
        </View> */}

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