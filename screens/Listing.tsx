import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList } from "react-native";
import { View, Text } from "../components/Themed";
import { Hotel } from "../components/Hotel";
import { RootTabScreenProps } from '../types';
import { useDispatch, useSelector } from "react-redux";
import {fetchHotels} from '../redux/actions'
import { rootReducerType, hotelType } from "../redux/reducers";


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch();
  const selectedCity = useSelector(
    (state: rootReducerType) => state.selectedCity
  );
  const hotels = useSelector((state: rootReducerType) => state.hotels.list);
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  useEffect(() => {
    dispatch(fetchHotels);
  }, []);
  // TODO test dispatch when loaded

  useEffect(() => {
    if (selectedCity && selectedCity !== "All Locations") {
      setFilteredHotels(
        hotels.filter((hotel: hotelType) => hotel.city === selectedCity)
      );
    }
  }, [selectedCity, hotels]);
  // TODO check filtered hotels when state changes
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location: {selectedCity}</Text>
      <FlatList
        data={filteredHotels}
        renderItem={({ item }) => (
          <Hotel navigation={navigation} hotel={item} />
        )}
        keyExtractor={(item) => item.name}
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
    textAlign: 'center',
    padding: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
