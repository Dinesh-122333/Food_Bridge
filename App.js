import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/Register'; // Import your Screen1 component here
import Roles from './screens/Roles'; // Import your Screen2 component here
import Location from './screens/Location';
import DonorHome from './screens/DonorHome'; 
import EnterDetails from './screens/EnterDetails';
import EnterDishes from './screens/EnterDishes';
import Confimation from './screens/Confirmation';
import Success from './screens/Success';
import Update from './screens/Update';

const Stack = createStackNavigator();

export default function App() {
  return (

  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
  <Stack.Screen name="Roles" component={Roles}  options={{ headerShown: false }}/>
  <Stack.Screen name="Location" component={Location}  options={{ headerShown: false }}/>
  <Stack.Screen name= "DonorHome" component={DonorHome} options={{headerShown: false}}/>
  <Stack.Screen name= "EnterDetails" component={EnterDetails} options={{headerShown: false}}/>
  <Stack.Screen name='EnterDishes' component={EnterDishes} options={{headerShown: false}}/>
  <Stack.Screen name='Confirmation' component={Confimation} options={{headerShown: false}}/>
  <Stack.Screen name='Success' component={Success} options={{headerShown: false}}/>
  <Stack.Screen name='Update' component={Update} options={{headerShown: false}}/>
  </Stack.Navigator>
  </NavigationContainer>
  );
}

