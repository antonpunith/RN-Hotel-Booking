import * as React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Text } from "../components/Themed";

export default function HotelDetail({ selectedHotel, details }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{selectedHotel}</Text>
      <Image
        style={styles.image}
        source={{
          uri: details.image,
        }}
      />
      {details?.description && (
        <Text style={styles.content}>{details.description}</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 400,
  },
  content: {
    padding: 20,
    lineHeight: 25
  }
});
