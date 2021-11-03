import { combineReducers } from "redux";
import {
  FETCHED_CITIES,
  SELECT_CITY,
  FETCHED_HOTELS,
  HOTEL_DETAILS,
} from "../action-types";

const initialCityState: string[] = [];
const citiesReducer = (state: string[], action: any) => {
  if(!state) {
    state = initialCityState;
  }
  switch (action.type) {
    case FETCHED_CITIES:
      if (action.payload) {
        return action.payload;
      }
    default:
      return state;
  }
};

const selectedCityReducer = (state: string, action: any) => {
  if (!state) {
    state = "";
  }
  switch (action.type) {
    case SELECT_CITY:
      if (action.payload) {
        return action.payload;
      }
    default:
      return state;
  }
};

export interface hotelType {
  name: string,
  city: string,
  description: string,
  image: string
}
export interface hotelsListType {
  list: hotelType[];
  selected: string;
}

const hotelsListReducer = (state: hotelsListType, action: any) => {
  if (!state) {
    state = {
      list: [],
      selected: "",
    };
  }
  switch (action.type) {
    case FETCHED_HOTELS:
      if (action.payload) {
        return Object.assign({}, state, { list: action.payload });
      }
    case HOTEL_DETAILS:
      if (action.payload) {
        return Object.assign({}, state, { selected: action.payload });
      }
    default:
      return state;
  }
};

export interface rootReducerType {
  cities: string[];
  selectedCity: string;
  hotels: hotelsListType;
}

export const rootReducer = combineReducers({
  cities: citiesReducer,
  selectedCity: selectedCityReducer,
  hotels: hotelsListReducer,
});
