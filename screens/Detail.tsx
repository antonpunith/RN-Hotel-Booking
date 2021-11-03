import * as React from "react";
import { useSelector } from "react-redux";
import HotelDetail from "../components/HotelDetail";
import { rootReducerType, hotelType } from "../redux/reducers";

export default function Detail() {
  const hotels = useSelector((state: rootReducerType) => state.hotels.list);
  const selectedHotel = useSelector(
    (state: rootReducerType) => state.hotels.selected
  );

  const details = hotels.find(
    (hotel: hotelType) => hotel.name === selectedHotel
  );

  return <HotelDetail selectedHotel={selectedHotel} details={details} />;
}
