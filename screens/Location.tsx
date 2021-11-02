import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { fetchCities, selectCity } from "../redux/actions";
import { Text, View } from "../components/Themed";

export default function Location({ navigation }: any) {
  const dispatch = useDispatch();
  const cities = useSelector((state: any) => state.cities);
  const selectedCity = useSelector((state: any) => state.selectedCity);
  const [selectedLanguage, setSelectedLanguage] = useState("Java");

  useEffect(() => {
    dispatch(fetchCities);
  }, []);
  // TODO check dispatch when component is mounted

  useEffect(() => {
    if (selectedCity) {
      navigation.navigate("Listing");
    }
  }, [selectedCity]);
  // TODO check navigation when selectedCity is set

  const handleClick = (city: string) => {
    return () => {
      dispatch(selectCity(city));
    };
  };
  // TODO check dispatch when element clicked

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Location: {selectedCity}</Text>
      {cities.map((city: any) => {
        return (
          <Pressable
            key={city}
            style={city === selectedCity ? styles.selectActive : styles.select}
            onPress={handleClick(city)}
          >
            <Text>{city}</Text>
          </Pressable>
        );
      })}
      <Pressable
        style={
          "All Locations" === selectedCity ? styles.selectActive : styles.select
        }
        onPress={handleClick("All Locations")}
      >
        <Text>All Locations</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  select: {
    padding: 10,
    borderColor: "#eeeeee",
    borderWidth: 2,
    width: 150,
  },
  selectActive: {
    padding: 10,
    borderColor: "#eeeeee",
    backgroundColor: '#f37121',
    borderWidth: 2,
    width: 150,
  },
});
