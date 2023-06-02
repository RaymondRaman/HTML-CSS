import {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid';

export default function App() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const deleteItem = async (id) => {
    const newList = await list.filter((item) => item.id !== id);
    await AsyncStorage.setItem('@value_list', JSON.stringify(newList));
    setList(newList);
    console.log(newList);
  };

  const getData = async () => {
    try {
      const valueList = await AsyncStorage.getItem('@value_list');
      console.log(valueList);
      if(valueList != null) {
        return JSON.parse(valueList);
      } else {
        return null;
      }
    } catch(e) {
      console.log("Something went wrong");
    }
  };

  const getitems = async () => {
    const data = await AsyncStorage.getItem('@value_list');
    if(!data) {
      setList([]);
    } else {
      setList(JSON.parse(data));
    }
  };

  const storeData = async (value) => {
    try {
      const valueList = JSON.stringify(value);
      await AsyncStorage.setItem('@value_list', valueList);
    } catch (e) {
      console.log(e);
      setError('Something went wrong');
    }
  };

  const handleSubmit = async () => {
    if(title.length > 10) {
      setError("length must be under 10 characters");
      setTitle('');
    } else if(title.length == 0) {
      setError("Input cannot be empty");
    } else {
      const item = {
        id: shortid.generate(),
        title: title,
      };
      const data = await getData();
      if(!data) {
        const newList = [item];
        storeData(newList);
      } else {
        data.push(item);
        storeData(data);
      }
      getitems();
      setTitle('');
      setError('');
    }    
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput
         placeholder='Enter a value'
         style={styles.input}
         onChangeText={text => setTitle(text)}
         value={title}
        />
        {error ? <Text style={styles.error}>{error}</Text> :
         <></>}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>List of all the values</Text>
      <ScrollView
       style={styles.display}
       contentContainerStyle={{alignItems: 'center'}}
      >
        {list.map((item) => {
          return (
            <View style={styles.item} key={item.id}>
              <Text style={styles.itemText}>{item.title}</Text>
              <TouchableOpacity 
               style={styles.delete}
               onPress={() => deleteItem(item.id)}>
               <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    padding: 40,
    width: '100%',
    backgroundColor: '#D4F4F6',
  },
  inputs: {
    marginVertical: 50,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: 200,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  }, 
  display: {
    flex: 1,
    marginTop: 60,
    width: 300,
  },
  delete: {
    backgroundColor: '#F4F4F4',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 250,
    height: 50, 
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  button: {
    height: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: { 
    color: 'white',
    fontSize: 15,
  },
  error: {
    color: '#f54748',
    fontSize: 15,
    paddingBottom: 10,
  },
});
