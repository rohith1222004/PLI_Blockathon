import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet } from 'react-native';
import welcomeScreen from './screens/welcome_page'
import situationScreen from './screens/ChooseSituation'
// import scanScreen from './screens/ScanFace_page'


const Stack = createStackNavigator();

const App= () => {

  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Welcome' component={welcomeScreen} options={{header:()=>null}}/>
    <Stack.Screen name='situation' component={situationScreen} options={{header:()=>null}}/>
    {/* <Stack.Screen name='scan' component={scanScreen} options={{header:()=>null}}/> */}
  </Stack.Navigator>
</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
   
  },

});

export default App;