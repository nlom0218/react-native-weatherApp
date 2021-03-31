import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import * as Location from "expo-location"

import Loading from './Loading';
import NowLoading from './NowLoading';
import axios from 'axios';

const API_KEY = "58f5d487b06fd096821ef170a3d65d47"

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)

  const getWeather = async (lat, lon) => {
    try {
      const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  const getLocation = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync()
      if (status !== "granted") {
        setErrorMsg("Premission to access location was denied")
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      const { coords: { latitude, longitude } } = location
      getWeather(latitude, longitude)
      setIsLoading(false)
    } catch (err) {
      Alert.alert("Can't Find", "so sad😭")
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <View style={styles.container}>
      {isLoading ? <NowLoading errorMsg={errorMsg} /> : <Loading />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})