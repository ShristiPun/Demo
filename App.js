import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/native';
import React from 'react';


//import { StyleSheet, Text, View } from 'react-native';
import RootStackScreen  from './src/screens/RootStackScreen';


const App =() =>{
  return (
    <NavigationContainer>
      <RootStackScreen/>

    </NavigationContainer>
  );

}

export default App;
