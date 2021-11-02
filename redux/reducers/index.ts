import { combineReducers } from "redux";
import { FETCHED_CITIES, SELECT_CITY, FETCHED_HOTELS } from "../action-types";


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

const hotelsListReducer = (state: any[], action: any) => {
  if (!state) {
    state = [];
  }
  switch (action.type) {
    case FETCHED_HOTELS:
      if (action.payload) {
        return action.payload;
      }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  cities: citiesReducer,
  selectedCity: selectedCityReducer,
  hotels: hotelsListReducer,
});
