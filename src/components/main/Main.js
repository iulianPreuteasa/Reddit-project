import React from "react";
import "./main.css";
import { useEffect, useState } from "react";
import { Article } from "../../features/Main/Article";

const Main = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("https://www.reddit.com/r/popular.json");
    const data = await response.json();
    setArticles(data.data.children);
    console.log(data.data.children);
  };
  return (
    <>
      <div className="container">
        <div className="articles">
          {articles !== null
            ? articles.map((article, index) => (
                <Article key={index} article={article.data} />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default Main;
