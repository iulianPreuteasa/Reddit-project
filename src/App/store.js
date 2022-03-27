import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loadReducer from "../components/main/mainSlice";

export default configureStore({
  reducer: {
    articles: loadReducer,
  },
});
