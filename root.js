import React from 'react';
import Main from './Contentpage';
import Home from './Homepage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function CustomNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Main'>
      <Stack.Screen name='Main' component={Main} options={{ headerShown: false }}/>
      <Stack.Screen name='Home' component={Home}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default CustomNavigator;
