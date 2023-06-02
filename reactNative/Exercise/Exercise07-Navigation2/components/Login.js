import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("TabNavigator")
            }}>
                <Text>Click here to Go to Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login