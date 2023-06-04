import {StyleSheet, LogBox, View, Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import Home from './components/Home';
import Edit from './components/Edit';
import New from './components/New';

export default function App() {
  const Stack = createNativeStackNavigator();
  LogBox.ignoreAllLogs();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
         initialRouteName='Home'
         screenOptions={{
          title: 'Todo List',
          headerTitleAlign: 'center',
          headerStyle :{
            backgroundColor: '#141E30',
          },
          headerTintColor: '#fff',
         }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Edit" component={Edit} />
          <Stack.Screen name="New" component={New} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})