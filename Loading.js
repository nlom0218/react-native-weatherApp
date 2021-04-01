import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const Loading = ({ errorMsg }) => {
    let text = ""
    if (errorMsg) {
        text = errorMsg
    } else {
        text = "Getting the fuking Weather"
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA",
    },
    text: {
        color: "#2c2c2c",
        fontSize: 35
    }
})

export default Loading