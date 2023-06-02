import { StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App () {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input} onChangeText={text=> setText(text)}
      value={text} />
       <TouchableOpacity 
       style={styles.button}
       onPress={() => {
        Speech.speak(text);
       }} >
        <Text style={styles.buttonText}>Speech</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: '80%'
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button:{
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
  }
});
