import * as React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];

import { Hotel } from "../Hotel";

const mockStore = configureMockStore(middlewares);

const store = mockStore({});

const hotelData = {
  name: "Quest Mounts Bay Road",
  city: "Perth",
  description:
    " You’re eligible for a Genius discount at Quest Mounts Bay Road! To save at this property, all you have to do is Quest Mounts Bay Road is conveniently located near the Perth Convention & Exhibition Centre and only a 16-minute walk to Perth’s CBD. Guests staying in a self-contained apartment at Quest Mounts Bay Road can stroll along the Swan River, which is 10 minutes’ walk away. The property is just a 12-minute walk from the beautiful Kings Park.",
  image:
    "https://cf.bstatic.com/xdata/images/hotel/square200/77513936.webp?k=c7e5276cb06face82eafc0f1e52f84c10f62cd81ae944ce38596b142e0a065eb&o=&s=1",
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Hotel hotel={hotelData}>Snapshot test!</Hotel>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// TODO check that selectHotel is dispatched when pressed