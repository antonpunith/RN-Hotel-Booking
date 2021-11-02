import * as React from 'react';
import { StyleSheet, FlatList } from "react-native";
import { View } from "../components/Themed";
import { Hotel } from "../components/Hotel";
import { RootTabScreenProps } from '../types';

const roomList = [
  {
    name: "Crowne Plaza Melbourne",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/278629182.webp?k=0493a24710d6cc489933dfcaf82d6d246a365abc29b4f76f86b37f9086058cec&o=&s=1",
  },
  {
    name: "Oaks Melbourne",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/239898700.webp?k=f89da21cd74b02e479b48e7f9757c640728e4c5a1eff74c534300b9ba5cfd8da&o=&s=1",
  },
  {
    name: "Radisson On Flagstaff Gardens Melbourne",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/267803149.webp?k=1763d277fab1092d72b03bdae1f85117f795107dab10c83684b9ab71d52c0933&o=&s=1",
  },
];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <FlatList
        data={roomList}
        renderItem={({ item }) => (
          <Hotel navigation={navigation} hotel={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
