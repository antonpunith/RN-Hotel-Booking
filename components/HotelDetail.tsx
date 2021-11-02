import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";

export default function HotelDetail({ selectedHotel, details }) {
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
    width: "100%",
    height: 300,
  },
});
