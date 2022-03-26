import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { loadArticles } from "../components/main/mainSlice";

export const store = configureStore({
  reducer: {
    articles: loadArticles,
  },
});
