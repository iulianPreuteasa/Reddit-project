import React from "react";
import "./main.css";
import { Article } from "../../features/Main/Article";
import { useSelector } from "react-redux";
import { selectArticles } from "./mainSlice";

const Main = () => {
  const articles = useSelector(selectArticles);

  console.log(articles);
  return (
    <>
      <div className="container">
        <div className="articles">
          {/* {articles !== null
            ? articles.map((article, index) => (
                <Article key={index} article={article.data} />
              ))
            : ""} */}
        </div>
      </div>
    </>
  );
};

export default Main;
