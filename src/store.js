import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "features/sideBarSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
  },
});

export default store;
