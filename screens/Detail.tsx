import * as React from "react";
import { Image } from "react-native";
import { useSelector } from "react-redux";
import { Text, View } from "../components/Themed";
import HotelDetail from "../components/HotelDetail";

export default function Detail() {
  const hotels = useSelector((state: any) => state.hotels.list);
  const selectedHotel = useSelector((state: any) => state.hotels.selected);

  const details = hotels.find((hotel: any) => 
    hotel.name === selectedHotel
  );

  return <HotelDetail selectedHotel={selectedHotel} details={details} />;
}
