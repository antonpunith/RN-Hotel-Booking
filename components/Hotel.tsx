import * as React from "react";
import { StyleSheet, Image, Pressable } from "react-native";

import { Text, View } from "./Themed";

interface HotelProps {
  hotel: {
    name: string;
    image: string;
  };
  navigation: any;
}

export function Hotel({ hotel, navigation }: HotelProps) {
  const bookBtn = () => {
    navigation.navigate("Detail");
  };
  const { name, image } = hotel;
  return (
    <Pressable style={styles.container} onPress={bookBtn}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.content}>
          <Text style={styles.text}>{name}</Text>
          <View style={styles.bookBtn}>
            <Text style={styles.btnText}>Explore</Text>
          </View>
        </View>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontWeight: 'bold'
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
    marginBottom: 5,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#f37121",
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: '#fff'
  }
});
