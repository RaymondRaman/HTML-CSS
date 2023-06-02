import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './component/Home';
import Profile from './component/Profile';
import Feed from './component/Feed'

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarIconStyle:{display:'none'},tabBarLabelPosition:"beside-icon"}}>
        <Tab.Screen name="Home" component={Home}>          
        </Tab.Screen>
        <Tab.Screen name="Profile"
        component={Profile}>          
        </Tab.Screen>
        <Tab.Screen name="Feed" component={Feed}>          
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
