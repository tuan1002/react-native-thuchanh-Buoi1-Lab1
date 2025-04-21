import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './BUOI1/HomeScreen';
import Project1 from './BUOI1/Project1';
import Project2 from './BUOI1/Project2';
import Project3 from './BUOI1/Project3';
import Project4 from './BUOI1/Project4';
import Project5 from './BUOI1/Project5';
import Project6 from './BUOI1/Project6';
import Project7 from './BUOI1/Project7';
import Project8 from './BUOI1/Project8';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Project1" component={Project1} />
        <Stack.Screen name="Project2" component={Project2} />
        <Stack.Screen name="Project3" component={Project3} />
        <Stack.Screen name="Project4" component={Project4} />
        <Stack.Screen name="Project5" component={Project5} />
        <Stack.Screen name="Project6" component={Project6} />
        <Stack.Screen name="Project7" component={Project7} />
        <Stack.Screen name="Project8" component={Project8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
