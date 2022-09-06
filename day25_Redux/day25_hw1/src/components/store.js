import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "../components/profileReducer";
import productReducer from "../components/productReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    product: productReducer
  },
});

export default store;