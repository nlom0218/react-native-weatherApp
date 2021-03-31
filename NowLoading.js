import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NowLoading = ({ errorMsg }) => {
    let text = ""
    if (errorMsg) {
        text = errorMsg
    } else {
        text = "Now Loading ..."
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    text: {
        color: "#2c2c2c",
        fontSize: 35
    }
})

export default NowLoading