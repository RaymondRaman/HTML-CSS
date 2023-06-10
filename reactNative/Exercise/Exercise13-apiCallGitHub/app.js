import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import { H1, Button, NativeBaseProvider} from 'native-base';
import axios from 'axios';
import User from './User.js';

export default function App() {
    const [details, setDetails] = useState("");
    const [username, setusername] = useState("");

    const getDate = async (username) => {
        try {
            let url =  `https://api.github.com/users/${username.toLowerCase()}`;
            const {data} = await axios.get(url);
            setDetails(data);
            setusername("");
        } catch {
            setDetails("Not Found");
            setusername("");
        }
    };
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Text style={styles.heading}>
                    GitHub API
                </Text>
                <View style={styles.innerContainer}>
                    {details ? (
                        details == "Not Found" ? (
                            <Text style={styles.error}>
                                User Not Found
                            </Text>
                            ) : (
                                <User details={details} />
                            )
                        )  : (
                            <></>
                        )}
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setusername(text)}
                            placeholder="Enter your github username"
                            value={username}
                            placeholderTextColor="#fff"
                        >
                        </TextInput>
                        <Button
                            success
                            styles={styles.button}
                            onPress={() => getDate(username)}
                        >
                            <Text style={styles.submitText}
                            >
                                Submit
                            </Text>
                        </Button>
                </View>
            </View>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C1017',
    },
    error: {
        fontSize: 30,
        color: "#fff",
        paddingBottom: 200,
    },
    input: {
        borderColor: '#292E34',
        borderWidth: 1,
        padding: 10,
        marginTop: 20,
        width: '70%',
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: '#fff',
        textAlign: 'center',
        padding: 20,
        marginTop: 50,
        fontSize: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#292E34',
    },
    button: {
        padding: 50,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 30,
        width: '40%',
    },
    submitText:{
        color: "#fff",
        fontWeight: "bold"
    }
})