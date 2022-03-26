import React from "react";
import "./main.css";
import { Article } from "../../features/Main/Article";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="articles">
          {/* {articles !== null
            ? articles.map((article, index) => (
                <Article key={index} article={article.data} />
              ))
            : ""} */}
          {/* {state.articles.data} */}
        </div>
      </div>
    </>
  );
};

export default Main;
