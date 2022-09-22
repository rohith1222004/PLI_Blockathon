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


const Stack = createStackNavigator();

const App= () => {

  return (
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

  );
}

const styles = StyleSheet.create({

});

export default App;