import { createSlice } from "@reduxjs/toolkit";

const loadData = async () => {
  const response = await fetch("https://www.reddit.com/r/popular.json");
  const data = await response.json();

  return data.data.children;
};

console.log(loadData());

export const loadArticles = createSlice({
  name: "articles",
  initialState: {
    articles: loadData(),
  },
  reducers: {},
});

export const selectArticles = (state) => state.articles;
export default loadArticles.reducer;
