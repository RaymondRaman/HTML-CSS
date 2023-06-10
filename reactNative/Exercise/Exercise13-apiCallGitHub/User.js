import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';


const User = ({details}) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardItem}>
                <Image
                    source={{
                        uri: details.avatar_url,
                    }}
                    style={styles.image}
                ></Image>
            </View>
            <View style={styles.cardItem}>
                <Text style={styles.text}>
                    {details.name}
                </Text>
            </View>
            <View style={styles.cardItem}>
                <Text style={styles.text}>
                    Followers: {details.followers}
                </Text>
            </View>
            <View style={styles.cardItem}>
                <Text style={styles.text}>
                    Followinng: {details.following}
                </Text>
            </View>
            <View footer style={styles.cardItem}>
                <Text style={styles.text}>
                    Public Repos: {details.public_repos}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "80%",
        backgroundColor: "#0C1017",
        borderColor: "#292E34",
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 80,
        paddingBottom: 20,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#292E34",
        marginTop: -50,
    },
    cardItem : {
        backgroundColor: "#0C1017",
        borderColor: "#292E34",
        paddingTop: 10,
    },
    text: {
        color: "#ccc",
    },
});

export default User;