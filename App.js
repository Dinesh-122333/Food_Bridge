import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './screen1'; // Import your Screen1 component here
import Screen2 from './screen2'; // Import your Screen2 component here
import Donor1 from './Donor1';

const Stack = createStackNavigator();

export default function App() {
  return (

  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }}/>
  <Stack.Screen name="Screen2" component={Screen2}  options={{ headerShown: false }}/>
  <Stack.Screen name="Donor1" component={Donor1}  options={{ headerShown: false }}/>
  </Stack.Navigator>
  </NavigationContainer>
  );
}

