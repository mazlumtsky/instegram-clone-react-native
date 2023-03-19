import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView } from "react-native"

import Screens from './Screens';

export default function App() {
  return (  
    <SafeAreaView style={{flex:1,marginTop:35,}}>
      <StatusBar style='dark' />
      <NavigationContainer >
        <Screens />
      </NavigationContainer>
    </SafeAreaView>
  );
}

