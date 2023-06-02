import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar} from 'expo-status-bar';

export default function App () {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {counter}
      </Text>
       <TouchableOpacity title="Increment" onPress={()=>setCounter(counter+1)}>
        <Text style={styles.button}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity title="Reset" onPress={()=>setCounter(0)}>
        <Text style={styles.button}>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    paddingBottom: 20
  },
  button:{
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
    width: 100,
    textAlign: 'center'
  }
});
