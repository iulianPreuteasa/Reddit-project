import { createSlice } from "@reduxjs/toolkit";

const loadData = async () => {
  const response = await fetch("https://www.reddit.com/r/popular.json");
  const data = await response.json();
  return data.data.children.map((article) => article.data);
};
console.log(loadData());

export const loadArticles = createSlice({
  name: "articles",
  initialState: loadData,
});

export default loadArticles.reducer;
