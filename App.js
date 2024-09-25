import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import Quiz from './pages/Quiz'; 
 

const Stack = createStackNavigator(); 
const App = () => { 
  return ( 

  <NavigationContainer> 
    <Stack.Navigator initialRouteName="Quiz"> 
    <Stack.Screen name="Quiz" component={Quiz} /> 
    </Stack.Navigator> 
  </NavigationContainer> 
); 
}; 
export default App; 