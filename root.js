import React from 'react';
import Main from './Splashpage';
import Home from './Homepage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Content from './Contentpage';

const Stack = createNativeStackNavigator();

function CustomNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Main'>
      <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      {/* <Stack.Screen name='Content' component={Content} options={{headerShown:false}}/> */}
    </Stack.Navigator>
  );
}

export default CustomNavigator;
