import { configureStore } from "@reduxjs/toolkit";
import  statesStore from "./slices/states";

export const store = configureStore({
  reducer: {
    states: statesStore,
  },
});
