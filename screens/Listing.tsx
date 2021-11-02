import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList } from "react-native";
import { View, Text } from "../components/Themed";
import { Hotel } from "../components/Hotel";
import { RootTabScreenProps } from '../types';
import { useDispatch, useSelector } from "react-redux";
import {fetchHotels} from '../redux/actions'


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch();
  const selectedCity = useSelector((state: any) => state.selectedCity);
  const hotels = useSelector((state: any) => state.hotels.list);
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  useEffect(() => {
    dispatch(fetchHotels);
  }, []);

  useEffect(() => {
    if (selectedCity && selectedCity !== "All Locations") {
      setFilteredHotels(
        hotels.filter((hotel: any) => hotel.city === selectedCity)
      );
    }
  }, [selectedCity, hotels]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location: {selectedCity}</Text>
      <FlatList
        data={filteredHotels}
        renderItem={({ item }) => (
          <Hotel key={item.name} navigation={navigation} hotel={item} />
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
