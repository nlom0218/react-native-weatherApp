import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Drizzle: {
        iconName: "rainy",
        gradient: ["#9CECFB", "#65C7F7", "#0052D4"],
        title: "Drizzle",
        subTitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "rainy",
        gradient: ["#9CECFB", "#65C7F7", "#0052D4"],
        title: "Raining like a MF",
        subTitle: "For more info look outside"
    },
    Snow: {
        iconName: "snow",
        gradient: ["#2193b0", "#6dd5ed"],
        title: "Cold as balls",
        subTitle: "Do you want to build a snowman? Fuck no."
    },
    Clear: {
        iconName: "sunny",
        gradient: ["#FDC830", "#F37335"],
        title: "Sunny as fuck",
        subTitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "cloud",
        gradient: ["#616161", "#8e9eab"],
        title: "Clouds",
        subTitle: "Take an umbrella with you in case it rains"
    },
    Haze: {
        iconName: "partly-sunny",
        gradient: ["#73C8A9", "#373B44"],
        title: "Haze",
        subTitle: "Just dont's go outside"
    },
    Mist: {
        iconName: "partly-sunny",
        gradient: ["#73C8A9", "#373B44"],
        title: "Mist",
        subTitle: "Just dont's go outside"
    },
    Dust: {
        iconName: "partly-sunny",
        gradient: ["#73C8A9", "#373B44"],
        title: "Dust",
        subTitle: "Just dont's go outside"
    },
    Thunderstorm: {
        iconName: "thunderstorm",
        gradient: ["#43cea2", "#185a9d"],
        title: "Thunderstorm in the house",
        subTitle: "Actually, outside of the house"
    }
}

const Weather = ({ temp, condition }) => {
    const { iconName: icon, gradient: ui, title, subTitle } = weatherOptions[condition]
    return (
        <LinearGradient
            colors={ui}
            style={styles.container}
        >
            <StatusBar barStyle={'light-content'} />
            <View style={styles.helfContainer}>
                <Ionicons name={icon} size={96} color="white"></Ionicons>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{ ...styles.helfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Thunderstorm"
    ])
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white",
        marginTop: 30
    },
    helfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 20
    },

})

export default Weather

