import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    order: orderSlice,
    data: dataSlice,
  },
});

export default store;
