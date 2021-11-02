import { FETCHING_CITIES, FETCHED_CITIES, SELECT_CITY } from "../action-types";
import axios from 'axios';

export const incrementValue = (value: string) => ({
  type: "increment_value",
  payload: value,
});

export const fetchingCities = () => ({
  type: FETCHING_CITIES,
});

export const fetchedCities = (payload: any) => ({
  type: FETCHED_CITIES, payload
})

export const fetchCities = (dispatch: any, getState: any) => {
  dispatch(fetchingCities());
  axios.get(
    "https://us-central1-rn-hotel-booking.cloudfunctions.net/app/cities"
  ).then(response => {
    dispatch(fetchedCities(response.data))
    }).catch(e => console.error(e));
};

export const selectCity = (city: string) => ({
  type: SELECT_CITY,
  payload: city
});
