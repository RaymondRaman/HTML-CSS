import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';

const PageA = ({navigation}) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        console.log('Page A useEffect');
        return () => {
            console.log('Page A useEffect cleanup');
        }
    }, []);

    useEffect(() => {
        console.log('Page A useEffect value changed');
       
    }, [value]);

    return (
        <View style={styles.container}>
            <Text>PageA</Text>
            <TouchableOpacity 
             style={styles.button} onPress={() => navigation.push('PageB')}>
                <Text>Go to PageB</Text>
            </TouchableOpacity>
            <TextInput 
             style={styles.input} 
             placeholder="change text"
             value={value} 
             onChangeText={setValue} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    text: {
        padding: 10,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 200,
        textAlign: 'center',
    },
});

export default PageA;