import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "../components/Themed";

export default function Detail() {
  const hotels = useSelector((state: any) => state.hotels.list);
  const selectedHotel = useSelector((state: any) => state.hotels.selected);

  const details = hotels.find((hotel: any) => 
    hotel.name === selectedHotel
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedHotel}</Text>
      <Image
        style={styles.image}
        source={{
          uri: details.image,
        }}
      />
      {details?.description && <Text>{details.description}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: '100%',
    height: 300,
  },
});
