import {StatusBar} from 'expo-status-bar';
import React from 'react';

import PageA from './component/PageA';
import PageB from './component/PageB';

import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PageA">
        <Stack.Screen name="PageA" component={PageA}>
        </Stack.Screen>
        <Stack.Screen name="PageB" component={PageB}>
        </Stack.Screen>
        {

        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgoundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
