import * as React from "react";
import { StyleSheet, Image, Pressable } from "react-native";

import { Text, View } from "./Themed";

interface HotelProps {
  hotel: {
    name: string;
    image: string;
  };
}

export function Hotel({ hotel }: HotelProps) {
  const bookBtn = () => {
    console.log(hotel);
  };
  const { name, image } = hotel;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.content}>
          <Text style={styles.text}>{name}</Text>
          <Pressable style={styles.bookBtn} onPress={bookBtn}>
            <Text>Explore</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 10,
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: "100%",
  },
  image: {
    width: 120,
    height: 120,
  },
  row: {
    flexDirection: "row",
  },
  content: {
    flex: 1,
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  bookBtn: {
    margin: 10,
    padding: 10,
    backgroundColor: "#bada55",
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
