import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import{createStackNavigator} from 'react-navigation/stack'
import{navigationContainer} from '@react-navigation/native'
const Stack=createStackNavigator()
export default function App() {      //we can display any of the three files
  return (
    <NavigationContainer>
      <Stack.Navigatior initialRouteName="home" screenOptions={{
        HeaderShown:false }}>
          <Stack.screen name="home" component={HomeScreen}/>
          <Stack.screen name="IssLocation" component={IssLocationScreen}/>
          <Stack.screen name="meteors" component={MeteorScreen}/>
      </Stack.Navigatior>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
